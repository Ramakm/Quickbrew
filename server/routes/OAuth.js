import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Google OAuth Client
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
);

// OAuth Login
router.post('/google', async (req, res) => {
  try {
    // Validate incoming request
    if (!req.body.code) {
      return res.status(400).json({
        success: false,
        message: 'Authorization code is required',
        data: null
      });
    }

    // Exchange authorization code for tokens
    const { tokens } = await client.getToken(req.body.code);
    
    // Verify ID token
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    // Extract payload
    const payload = ticket.getPayload();
    
    // Prepare user data
    const userData = {
      name: payload['name'],
      email: payload['email'],
      password: Math.random().toString(36).slice(-8), // Random placeholder
      googleId: payload['sub']
    };

    // Find or create user
    let user = await User.findOne({ 
      $or: [
        { email: userData.email },
        { googleId: userData.googleId }
      ]
    });
    
    if (!user) {
      try {
        user = new User(userData);
        await user.save();
      } catch (createError) {
        return res.status(500).json({
          success: false,
          message: 'Error creating user',
          data: null,
          error: createError.message
        });
      }
    }

    // Generate access token
    const accessToken = generateAccessToken(user);

    // Respond with user and token
    res.status(200).json({
      success: true,
      message: 'Authentication successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        token: accessToken
      }
    });

  } catch (error) {
    console.error('OAuth Authentication Error:', error);
    
    res.status(401).json({
      success: false,
      message: 'Authentication failed',
      data: null,
      error: error.message || 'Unknown authentication error'
    });
  }
});

// Generate Access Token
function generateAccessToken(user) {
  return jwt.sign(
    { 
      id: user._id, 
      email: user.email, 
      role: user.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

// JWT Authentication Middleware
export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid or expired token',
          data: null
        });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Authorization token required',
      data: null
    });
  }
};

// Protected Route Example
router.get('/profile', authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password')
      .lean();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        data: null
      });
    }

    res.json({
      success: true,
      message: 'Profile retrieved',
      data: { user }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving profile',
      data: null,
      error: error.message
    });
  }
});

export default router;
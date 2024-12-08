import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';

const router = express.Router();
const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
);

router.post('/google', async (req, res) => {
  try {
    // Verify Google OAuth code
    const { tokens } = await oauth2Client.getToken(req.body.code);
    
    // Verify ID token
    const ticket = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    // Extract user information
    const payload = ticket.getPayload();
    
    // Prepare user data
    const userData = {
      name: payload['name'],
      email: payload['email'],
      googleId: payload['sub'],
      role: 'student'
    };

    // Check if user exists
    let user = await User.findOne({ email: userData.email });

    if (user) {
      // User exists - login
      return res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        type: 'login',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    } else {
      // New user - signup
      user = new User(userData);
      await user.save();

      return res.status(201).json({
        success: true,
        message: 'User signed up successfully',
        type: 'signup',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    }

  } catch (error) {
    console.error('OAuth Authentication Error:', error);
    res.status(401).json({
      success: false,
      message: 'Authentication failed',
      error: error.message
    });
  }
});

export default router;
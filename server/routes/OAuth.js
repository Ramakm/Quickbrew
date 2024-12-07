import { Router } from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const router = Router();

// Configure Passport with Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, save or process the user information as needed
      console.log('Authenticated User:', profile);
      return done(null, profile);
    }
  )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google Login Route
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google Callback Route
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req, res) => {
    // Redirect to success page or main application
    res.redirect('/auth/success');
  }
);

// Success Route
router.get('/success', (req, res) => {
  res.json({
    message: 'Authentication successful!',
    user: req.user // Contains user info after login
  });
});

// Failure Route
router.get('/failure', (req, res) => {
  res.status(401).json({ error: 'Authentication failed!' });
});

export default router;

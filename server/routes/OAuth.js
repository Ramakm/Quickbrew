const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();

// Configure Passport with Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, handle user information (e.g., save to DB or session)
      console.log('Google Profile:', profile);
      return done(null, profile);
    }
  )
);

// Serialize User
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize User
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google OAuth Routes
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/failure'
  }),
  (req, res) => {
    res.redirect('/auth/success');
  }
);

// Success Route
router.get('/success', (req, res) => {
  res.send('Authentication Successful!');
});

// Failure Route
router.get('/failure', (req, res) => {
  res.send('Authentication Failed!');
});

module.exports = router;

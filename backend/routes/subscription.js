import express from 'express';
import Stripe from 'stripe';
import auth from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create subscription
router.post('/create', auth, async (req, res) => {
  try {
    const { planId } = req.body;
    
    // Create or get customer
    let customer = await stripe.customers.create({
      email: req.user.email,
      source: req.body.paymentMethodId
    });

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: planId }],
    });

    // Update user subscription status
    await User.findByIdAndUpdate(req.user._id, {
      stripeCustomerId: customer.id,
      subscriptionId: subscription.id,
      subscriptionStatus: 'active'
    });

    res.json({ subscription });
  } catch (error) {
    res.status(500).json({ message: 'Error creating subscription' });
  }
});

// Cancel subscription
router.post('/cancel', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    if (user.subscriptionId) {
      await stripe.subscriptions.del(user.subscriptionId);
      
      await User.findByIdAndUpdate(req.user._id, {
        subscriptionStatus: 'cancelled'
      });
    }

    res.json({ message: 'Subscription cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling subscription' });
  }
});

export default router;
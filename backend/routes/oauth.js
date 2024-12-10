import express from 'express';
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const router = express.Router()

router.get('/callback', async (req, res) => {
  const { accessToken } = req.query;
  if (!accessToken) {
    return res.status(400).send('Missing accessToken parameter');
  }

  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(accessToken);
    if (error) return res.json({ 'error': {'message': error.message} })

    res.json({ data: { user: data.user, access_token: data.session.access_token }});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
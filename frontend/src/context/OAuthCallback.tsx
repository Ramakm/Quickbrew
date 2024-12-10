import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      // Get the current URL
      const currentUrl = new URL(window.location.href);
      
      // Check for error in URL parameters
      const error = currentUrl.searchParams.get('error');
      if (error) {
        console.error('Authentication error:', error);
        navigate('/login');
        return;
      }

      // Attempt to get the session
      const { data, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('Session retrieval error:', sessionError.message);
        navigate('/login');
        return;
      }

      // Check if we have a valid session
      if (data.session) {
        navigate('/dashboard');
      } else {
        navigate('/login');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return <div>Authenticating... Please wait.</div>;
};

export default AuthCallback;
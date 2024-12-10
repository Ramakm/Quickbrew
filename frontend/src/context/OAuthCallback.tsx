import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AuthCallback")
    const handleAuthCallback = async () => {
      const params = new URLSearchParams(location.hash.slice(1))
      const accessToken = params.get('access_token')

      console.log(accessToken)

      if (accessToken) {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/oauth/callback?accessToken=${accessToken}`);
        const data = await response.json();

        if (data.error) {
          console.error('Error during authentication:', data.error);
        } else {
          console.log('User authenticated:', data.user);
          navigate('/dashboard'); // Redirect to dashboard
        }
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;

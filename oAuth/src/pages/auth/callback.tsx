import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle the OAuth callback
    const handleAuthCallback = async () => {
      const { error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error during auth callback:', error);
        navigate('/login?error=Authentication failed');
      } else {
        navigate('/welcome');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div>
      <h2>
        Processing authentication...
      </h2>
      <p>
        Please wait while we complete the authentication process.
      </p>
    </div>
  );
}
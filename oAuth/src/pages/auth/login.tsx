import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/auth_context';

export default function Login() {
  const { user, isLoading, signInWithGoogle, signInWithFacebook } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const errorMessage = new URLSearchParams(location.search).get('error');

  useEffect(() => {
    // If user is already logged in, redirect to welcome page
    if (user && !isLoading) {
      navigate('/welcome');
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>Login</h1>
        
        {errorMessage && (
          <div>
            {errorMessage}
          </div>
        )}

        <div>
          <button onClick={signInWithGoogle}>
            Continue with Google
          </button>
          
          <button onClick={signInWithFacebook}>
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
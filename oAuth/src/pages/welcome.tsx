import { useAuth } from '../contexts/auth_context';
import { Navigate } from 'react-router-dom';

export default function Welcome() {
  const { user, signOut } = useAuth();

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <div>
        <h1>Welcome!</h1>
        
        <div>
          <p>
            <span>Email:</span> {user.email}
          </p>
          {user.user_metadata?.full_name && (
            <p>
              <span>Name:</span> {user.user_metadata.full_name}
            </p>
          )}
        </div>
        
        <div>
          <button onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
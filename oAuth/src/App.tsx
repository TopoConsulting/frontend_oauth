import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/auth_context';
import AuthCallback from './pages/auth/callback';
import Welcome from './pages/welcome';
import Login from './pages/auth/login';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App

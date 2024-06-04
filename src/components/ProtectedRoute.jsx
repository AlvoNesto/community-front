import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
  
    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }
  
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
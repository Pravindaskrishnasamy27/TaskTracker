import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

export default function ProtectedRoute({ children, roles }) {
  const { auth } = useContext(AuthContext);

  if (!auth.user) return <Navigate to="/login" />;
  if (roles && !roles.includes(auth.user.role)) return <Navigate to="/unauthorized" />;

  return children;
}

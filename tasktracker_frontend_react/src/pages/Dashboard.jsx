import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export default function Dashboard() {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <h2>Welcome, {auth.user?.sub}</h2>
      <p>Role: {auth.user?.role}</p>
    </div>
  );
}

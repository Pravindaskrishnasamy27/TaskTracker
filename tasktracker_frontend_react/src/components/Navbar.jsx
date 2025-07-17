import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const context = useContext(AuthContext);
  const auth = context?.auth || {};
  const logout = context?.logout || (() => {});

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      {auth.user?.role === 'ADMIN' && (
        <Link to="/admin" style={{ marginRight: '10px' }}>Admin</Link>
      )}
      <Link to="/tasks" style={{ marginRight: '10px' }}>Tasks</Link>
      {auth.user && (
        <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
      )}
    </nav>
  );
}

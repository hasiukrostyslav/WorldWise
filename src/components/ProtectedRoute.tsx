import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { useEffect } from 'react';
import Spinner from './Spinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, fetchStatus } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && fetchStatus !== 'fetching')
      navigate('/login');
  }, [isAuthenticated, isLoading, fetchStatus, navigate]);

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;

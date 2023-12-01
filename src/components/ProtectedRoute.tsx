import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../hooks/useUser';

import Spinner from './Spinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, isFetching } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !isFetching) navigate('/login');
  }, [isAuthenticated, isLoading, isFetching, navigate]);

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;

import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../services/apiAuth';

export function useUser() {
  const {
    data: user,
    isLoading,
    fetchStatus,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  console.log(user?.role, isLoading, fetchStatus);

  return {
    user,
    isLoading,
    isAuthenticated: user?.role === 'authenticated',
    fetchStatus,
  };
}

import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../services/apiAuth';

export function useUser() {
  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return {
    user,
    isLoading,
    isFetching,
    isAuthenticated: user?.role === 'authenticated',
    userName: user?.user_metadata.full_name,
    userPhoto: user?.user_metadata.avatar_url,
  };
}

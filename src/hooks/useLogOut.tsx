import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPI } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      navigate('/');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return { logout };
}

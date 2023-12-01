import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { logout as logoutAPI } from '../services/apiAuth';

export function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      navigate('/');
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('You have been Logged Out');
    },
    onError: (error) => toast.error(error.message),
  });

  return { logout };
}

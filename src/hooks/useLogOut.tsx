import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
      queryClient.removeQueries({ queryKey: ['cities'], exact: true });
      toast.success('You have been Logged Out');
    },
    onError: (error) => toast.error(error.message),
  });

  return { logout };
}

import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { login as loginAPI } from '../services/apiAuth';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: () => {
      navigate('/app');
      toast.success('You have been Sign In');
    },
    onError: (error) => toast.error(error.message),
  });

  return { login, isPending };
}

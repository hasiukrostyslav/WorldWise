import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { signUp as signUpAPI } from '../services/apiAuth';

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: () => {
      navigate('/app');
      toast.success('You have been Sign Up');
    },
    onError: (error) => toast.error(error.message),
  });

  return { signUp, isPending };
}

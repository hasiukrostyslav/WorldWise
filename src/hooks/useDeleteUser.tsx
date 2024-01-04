import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteUser as deleteUserAPI } from '../services/apiAuth';

export function useDeleteUser() {
  const navigate = useNavigate();

  const { mutate: deleteUser, isPending } = useMutation({
    mutationFn: deleteUserAPI,
    onSuccess: () => {
      navigate('/');
      toast.success('Your account was delete');
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteUser, isPending };
}

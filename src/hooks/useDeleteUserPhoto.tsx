import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteUserPhoto as deleteUserPhotoAPI } from '../services/apiAuth';

export function useDeleteUserPhoto() {
  const queryClient = useQueryClient();

  const { mutate: deleteUserPhoto, isPending } = useMutation({
    mutationFn: deleteUserPhotoAPI,
    onError: (error) => toast.error(error?.message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('User photo was deleted');
    },
  });
  return { deleteUserPhoto, isPending };
}

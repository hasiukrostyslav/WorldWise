import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateUserPhoto as updateUserPhotoAPI } from '../services/apiAuth';

export function useUpdateUserPhoto() {
  const queryClient = useQueryClient();

  const { mutate: updateUserPhoto, isPending } = useMutation({
    mutationFn: updateUserPhotoAPI,
    onError: (error) => toast.error(error?.message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('User photo was updated');
    },
  });
  return { updateUserPhoto, isPending };
}

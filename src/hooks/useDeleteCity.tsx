import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCity as deleteCityAPI } from '../services/apiCities';

export function useDeleteCity() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteCity,
    isPending,
    isError,
  } = useMutation({
    mutationFn: deleteCityAPI,

    onSuccess: () => {
      toast.success('City was delete');
      queryClient.invalidateQueries({ queryKey: ['cities'] });
    },

    onError: () => toast.error('City can not be deleted.\nPlease try again.'),
  });
  return { deleteCity, isPending, isError };
}

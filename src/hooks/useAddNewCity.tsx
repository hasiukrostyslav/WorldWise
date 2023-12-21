import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { addNewCity } from '../services/apiCities';

export function useAddNewCity() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: addCity, isPending } = useMutation({
    mutationFn: addNewCity,

    onSuccess: () => {
      navigate('/app');
      toast.success('City has been added');
      queryClient.removeQueries({ queryKey: ['newCity'] });
    },
    onError: () =>
      toast.error('There was a problem with adding city.\nPlease try again.'),
  });
  return { addCity, isPending };
}

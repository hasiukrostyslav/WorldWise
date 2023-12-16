import { useMutation } from '@tanstack/react-query';
import { addNewCity } from '../services/apiCities';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useAddNewCity() {
  const navigate = useNavigate();

  const { mutate: addCity, isPending } = useMutation({
    mutationFn: addNewCity,

    onSuccess: () => {
      navigate('/app');
      toast.success('City has been added');
    },
    onError: () =>
      toast.error('There was a problem sending data.\nPlease try again.'),
  });
  return { addCity, isPending };
}

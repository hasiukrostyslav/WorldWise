import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { editCity as editCityAPI } from '../services/apiCities';

function useEditCity() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: editCity, isPending } = useMutation({
    mutationFn: editCityAPI,
    onSuccess: () => {
      toast.success('Changes has been saved');
      queryClient.invalidateQueries({ queryKey: ['cities'] });
      navigate('/app');
    },
    onError: () => toast.error('Your changes could not be saved'),
  });
  return { editCity, isPending };
}

export default useEditCity;

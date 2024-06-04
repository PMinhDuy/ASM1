import { getPosts } from '../../apis/getPosts';
import { useQuery } from '@tanstack/react-query';

export const useGetPosts = () => {
  const { data, isPending, isFetching, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return {
    data,
    isPending,
    isFetching,
    error,
  };
};

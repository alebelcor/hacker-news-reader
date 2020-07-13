import ky from 'ky-universal';
import { useQuery } from 'react-query';

import endpoints from 'src/utils/endpoints-helper';

const fetchTopStories = async () => {
  return ky.get(endpoints('topStories')).json();
};

export default () => {
  const { error, isLoading, data } = useQuery('topStories', fetchTopStories, {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return {
    error,
    isLoading,
    topStories: data ?? [],
  };
};

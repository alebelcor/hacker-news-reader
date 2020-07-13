import ky from 'ky-universal';
import { useQuery } from 'react-query';

import endpoints from 'src/utils/endpoints-helper';

const fetchItem = async (_key, id) => {
  return ky.get(endpoints('item', { id })).json();
};

export default (id) => {
  const { error, isLoading, data } = useQuery(['item', id], fetchItem, {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return {
    error,
    isLoading,
    item: data
      ? {
          id: data.id,
          commentCount: data.descendants,
          score: data.score,
          title: data.title,
          url: data.url,
          author: data.by,
          postedAt: data.time * 1000,
        }
      : {},
  };
};

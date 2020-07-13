import { useQuery } from 'react-query';

import useTopStories from 'src/hooks/useTopStories';

jest.mock('react-query');

it('should return item data when fetched', () => {
  useQuery.mockImplementation(() => {
    return {
      error: null,
      isLoading: false,
      data: [111, 222, 333],
    };
  });

  const { topStories } = useTopStories();

  expect(topStories).toStrictEqual([111, 222, 333]);

  expect(useQuery).toHaveBeenCalled();
  expect(useQuery).toHaveBeenCalledWith('topStories', expect.any(Function), expect.any(Object));
});

it('should return an empty object otherwise', () => {
  useQuery.mockImplementation(() => {
    return {
      error: null,
      isLoading: false,
      data: null,
    };
  });

  const { topStories } = useTopStories();

  expect(topStories).toStrictEqual([]);
});

import { useQuery } from 'react-query';

import useItem from 'src/hooks/useItem';

jest.mock('react-query');

it('should return item data when fetched', () => {
  const nowInSeconds = Math.floor(Date.now() / 1000);

  useQuery.mockImplementation(() => {
    return {
      error: null,
      isLoading: false,
      data: {
        id: 111,
        descendants: 222,
        score: 333,
        title: 'foo',
        url: 'https://foo.com',
        by: 'john-doe',
        time: nowInSeconds,
      },
    };
  });

  const { item } = useItem(111);

  expect(item).toStrictEqual({
    id: 111,
    commentCount: 222,
    score: 333,
    title: 'foo',
    url: 'https://foo.com',
    author: 'john-doe',
    postedAt: nowInSeconds * 1000,
  });

  expect(useQuery).toHaveBeenCalled();
  expect(useQuery).toHaveBeenCalledWith(['item', 111], expect.any(Function), expect.any(Object));
});

it('should return an empty object otherwise', () => {
  useQuery.mockImplementation(() => {
    return {
      error: null,
      isLoading: false,
      data: null,
    };
  });

  const { item } = useItem(111);

  expect(item).toStrictEqual({});
});

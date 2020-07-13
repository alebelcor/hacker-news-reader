import React from 'react';
import { render, waitFor } from '@testing-library/react';

import useItem from 'src/hooks/useItem';

import Item from 'src/components/Item/Item';

jest.mock('src/hooks/useItem');

jest.mock('src/components/Spinner/Spinner', () => {
  return jest.fn(({ className }) => {
    return <div>{`<SpinnerMock className="${className}" />`}</div>;
  });
});

it('should render an error when failing to fetch item', async () => {
  useItem.mockImplementation(() => {
    return { error: {} };
  });

  const { getByText } = render(<Item id={1} />);

  await waitFor(() => {
    expect(getByText('There was an error requesting the item.')).toBeVisible();
  });

  expect(useItem).toHaveBeenCalled();
  expect(useItem).toHaveBeenCalledWith(1);
});

it('should render a spinner failing to fetching an item', async () => {
  useItem.mockImplementation(() => {
    return { error: null, isLoading: true };
  });

  const { getByText } = render(<Item id={1} />);

  await waitFor(() => {
    expect(getByText('<SpinnerMock className="block-center" />'));
  });

  expect(useItem).toHaveBeenCalled();
  expect(useItem).toHaveBeenCalledWith(1);
});

it('should render all appropriate data of the item ', () => {
  useItem.mockImplementation(() => {
    return {
      error: null,
      isLoading: false,
      item: {
        commentCount: 222,
        score: 333,
        title: 'My news title',
        url: 'https://foo.com',
        author: 'john-doe',
        postedAt: Date.now(),
      },
    };
  });

  const { getByText } = render(<Item id={111} />);

  expect(getByText('222')).toBeVisible();
  expect(getByText('333')).toBeVisible();
  expect(getByText('My news title')).toBeVisible();
  expect(getByText('foo.com')).toBeVisible();
  expect(getByText('john-doe')).toBeVisible();
  expect(getByText('just now')).toBeVisible();
});

it('should render a link to HN for "Ask HN" and "Show HN" type of stories (with no url)', () => {
  useItem.mockImplementation(() => {
    return {
      error: null,
      isLoading: false,
      item: {
        commentCount: 222,
        score: 333,
        title: 'My news title',
        author: 'john-doe',
        postedAt: Date.now(),
      },
    };
  });

  const { getByText } = render(<Item id={111} />);

  expect(getByText('My news title')).toHaveAttribute(
    'href',
    'https://news.ycombinator.com/item?id=111'
  );
});

it('should render a `-` for the comment count when one is not available', () => {
  useItem.mockImplementation(() => {
    return {
      error: null,
      isLoading: false,
      item: {
        score: 333,
        title: 'My news title',
        url: 'https://foo.com',
        author: 'johndoe',
        postedAt: Date.now(),
      },
    };
  });

  const { getByText } = render(<Item id={111} />);

  expect(getByText('-')).toHaveAttribute('href', 'https://news.ycombinator.com/item?id=111');
});

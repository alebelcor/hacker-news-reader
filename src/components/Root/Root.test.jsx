import React from 'react';
import { render, waitFor } from '@testing-library/react';

import useTopStories from 'src/hooks/useTopStories';

import Root from 'src/components/Root/Root';

jest.mock('src/hooks/useTopStories');

jest.mock('src/pages/ErrorPage/ErrorPage', () => {
  return jest.fn(() => {
    return <div>{`<ErrorPageMock />`}</div>;
  });
});

jest.mock('src/pages/LoadingPage/LoadingPage', () => {
  return jest.fn(() => {
    return <div>{`<LoadingPageMock />`}</div>;
  });
});

jest.mock('src/pages/TopStoriesPage/TopStoriesPage', () => {
  return jest.fn(() => {
    return <div>{`<TopStoriesPageMock />`}</div>;
  });
});

it('should render an error page when failing to get top stories', async () => {
  useTopStories.mockImplementation(() => {
    return { error: {} };
  });

  const { getByText } = render(<Root />);

  await waitFor(() => {
    expect(getByText('<ErrorPageMock />')).toBeVisible();
  });
});

it('should render a loading page when loading top stories ', () => {
  useTopStories.mockImplementation(() => {
    return { isLoading: true };
  });

  const { getByText } = render(<Root />);

  expect(getByText('<LoadingPageMock />')).toBeVisible();
});

it('should render a top stories page when successfully receiving top stories ', async () => {
  useTopStories.mockImplementation(() => {
    return { error: null, isLoading: false };
  });

  const { getByText } = render(<Root />);

  await waitFor(() => {
    expect(getByText('<TopStoriesPageMock />')).toBeVisible();
  });
});

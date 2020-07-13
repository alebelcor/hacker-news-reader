import React from 'react';
import { render, waitFor } from '@testing-library/react';

import ErrorPage from 'src/pages/ErrorPage/ErrorPage';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

it('should update the page title', async () => {
  render(<ErrorPage />);

  await waitFor(() => {
    expect(document.title).toBe('Error | Hacker News');
  });
});

it('should render an error message', () => {
  const { getByText } = render(<ErrorPage />);

  expect(
    getByText('There was en error loading the page. Please refresh to try again.')
  ).toBeVisible();
});

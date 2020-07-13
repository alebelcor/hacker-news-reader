import React from 'react';
import { render, waitFor } from '@testing-library/react';

import LoadingPage from 'src/pages/LoadingPage/LoadingPage';

jest.mock('src/components/Spinner/Spinner', () => {
  return jest.fn(({ className }) => {
    return <div>{`<SpinnerMock className="${className}"`}</div>;
  });
});

beforeAll(() => {
  window.scrollTo = jest.fn();
});

it('should update the page title', async () => {
  render(<LoadingPage />);

  await waitFor(() => {
    expect(document.title).toBe('Loading… | Hacker News');
  });
});

it('should render a a spinner', () => {
  const { getByText } = render(<LoadingPage />);

  expect(getByText('<SpinnerMock className="block-center"')).toBeVisible();
});

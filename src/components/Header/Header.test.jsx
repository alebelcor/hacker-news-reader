import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from 'src/components/Header/Header';

it('should display header links', () => {
  const { getByText } = render(<Header />);

  const texts = ['Top', 'New', 'Best', 'Submit', 'More', 'Login'];

  texts.forEach((text) => {
    expect(getByText(text)).toBeVisible();
  });
});

it('should have a "more" link that does nothing', () => {
  const { getByText } = render(<Header />);

  fireEvent.click(getByText('More'));
});

import React from 'react';
import { render } from '@testing-library/react';

import Footer from 'src/components/Footer/Footer';

it('should display footer links', () => {
  const { getByText } = render(<Footer />);

  const texts = [
    'Guidelines',
    'FAQ',
    'Support',
    'API',
    'Security',
    'Lists',
    'Bookmarklet',
    'Legal',
    'Apply to YC',
    'Contact',
  ];

  texts.forEach((text) => {
    expect(getByText(text)).toBeVisible();
  });
});

import React from 'react';
import { render, screen } from 'test-utils'
import Header from './Header';

it('Render Header', () => {
  render(<Header />)

  expect(screen.getByText(/Bank Accounts/i)).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from 'test-utils'
import Dashboard from './Dashboard';

it('Render Dashboard', () => {
  render(<Dashboard left={<div>left</div>} right={<div>right</div>} />)

  expect(screen.getByText(/left/i)).toBeInTheDocument();
  expect(screen.getByText(/right/i)).toBeInTheDocument();
});

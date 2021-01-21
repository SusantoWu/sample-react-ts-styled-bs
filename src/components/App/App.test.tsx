import React from 'react';
import { render } from 'test-utils'
import App from './App';

it('Render App', () => {
  const { container } = render(<App />, { router: true })

  expect(container.getElementsByClassName('navbar').length).toEqual(1);
  expect(container.getElementsByClassName('dashboard').length).toEqual(1);
});

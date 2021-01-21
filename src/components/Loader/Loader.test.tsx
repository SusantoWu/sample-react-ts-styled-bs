import React from 'react';
import { ApplicationAction } from 'store';
import { render } from 'test-utils'
import Loader from './Loader';

const initialState = { applicationReducer: { requests: [{ type: ApplicationAction.FetchAccounts, error: null }] } }

it('Render Loader', () => {
  const { container } = render(<Loader type={ApplicationAction.FetchAccounts} />, { initialState })

  expect(container.getElementsByClassName('loader').length).toEqual(1);
});

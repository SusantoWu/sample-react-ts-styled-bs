import React from 'react';
import { render } from 'test-utils'
import Accounts from './Accounts';

const getAccounts = (count: number) => {
  return Array.from(new Array(count), (x, i) => ({
    "id": i + 1,
    "account_name": "Savings Account",
    "account_type": "savings",
    "balance": 32334.32,
    "currency": "SGD",
    "account_number": "342423455344",
    "is_active": true
  }));
}

const initialState = { applicationReducer: { accounts: getAccounts(2), transactions: [], requests: [] } }

it('Render Accounts', () => {
  const { container } = render(<Accounts />, { initialState, router: true })

  expect(container.getElementsByClassName('list-group').length).toEqual(1);
  expect(container.getElementsByClassName('list-group-item').length).toEqual(2);
});

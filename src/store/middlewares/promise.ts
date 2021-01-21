import { Dispatch } from 'react';
import { MiddlewareAPI } from 'redux';
import { Client } from 'clients';
import { ApplicationAction, ApplicationActionType, MyAccount, MyTransaction } from '../types';

const client = new Client();

function request<T>(dispatch: Dispatch<any>, endpoint: string, success: ApplicationAction, failed: ApplicationAction) {
  client.get<T>(endpoint).then((payload) => {
    dispatch({ type: success, payload });
  }).catch(error => {
    dispatch({ type: failed, payload: error.message });
  });
}

export const promiseMiddleware = ({ dispatch }: MiddlewareAPI) => (next: Dispatch<any>) => (action: ApplicationActionType) => {
  if (action.type === ApplicationAction.FetchAccounts) {
    request<MyAccount[]>(dispatch, '/accounts', ApplicationAction.FetchAccountsSuccess, ApplicationAction.FetchAccountsFailed);
  } else if (action.type === ApplicationAction.FetchTransactions) {
    request<MyTransaction[]>(dispatch, `/accounts/${action.payload}/transactions`, ApplicationAction.FetchTransactionsSuccess, ApplicationAction.FetchTransactionsFailed);
  }

  return next(action)
}

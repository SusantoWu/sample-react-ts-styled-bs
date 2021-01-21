import { MyAccount, MyTransaction } from '../types';

export type { MyAccount, MyTransaction };

export enum ApplicationAction {
  FetchAccounts,
  FetchAccountsSuccess,
  FetchAccountsFailed,
  FetchTransactions,
  FetchTransactionsSuccess,
  FetchTransactionsFailed
}

export interface FetchAccountsAction {
  type: typeof ApplicationAction.FetchAccounts
}

export interface FetchAccountsSuccessAction {
  type: typeof ApplicationAction.FetchAccountsSuccess,
  payload: MyAccount[]
}

export interface FetchAccountsFailedAction {
  type: typeof ApplicationAction.FetchAccountsFailed,
  payload: string
}

export interface FetchTransactionsAction {
  type: typeof ApplicationAction.FetchTransactions,
  payload: number
}

export interface FetchTransactionsSuccessAction {
  type: typeof ApplicationAction.FetchTransactionsSuccess,
  payload: MyTransaction[]
}

export interface FetchTransactionsFailedAction {
  type: typeof ApplicationAction.FetchTransactionsFailed,
  payload: string
}

export type ApplicationActionType = FetchAccountsAction |
  FetchAccountsSuccessAction |
  FetchAccountsFailedAction |
  FetchTransactionsAction |
  FetchTransactionsSuccessAction |
  FetchTransactionsFailedAction;

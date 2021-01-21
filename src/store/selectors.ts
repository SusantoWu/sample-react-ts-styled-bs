import { RootState } from "./reducers";
import { ApplicationAction } from "./types";

export const getAccounts = ({ applicationReducer: state }: RootState) => state.accounts;
export const getTransactions = ({ applicationReducer: state }: RootState, id: number | string) => {
  const accountId = typeof id === 'string' ? Number(id) : id;
  return state.transactions.filter(transaction => transaction.account_id === accountId);
};
export const getTransaction = ({ applicationReducer: state }: RootState, id: number | string) => {
  const transactionId = typeof id === 'string' ? Number(id) : id;
  return state.transactions.find(transaction => transaction.id === transactionId);
};
export const getRequest = ({ applicationReducer: state }: RootState, type: ApplicationAction) => state.requests.find(request => request.type === type);
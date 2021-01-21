import { FetchAccountsAction, FetchTransactionsAction, ApplicationAction } from "../types"

export const fetchAccounts = (): FetchAccountsAction => ({
  type: ApplicationAction.FetchAccounts
});

export const fetchTransactions = (payload: number): FetchTransactionsAction => ({
  type: ApplicationAction.FetchTransactions,
  payload
});

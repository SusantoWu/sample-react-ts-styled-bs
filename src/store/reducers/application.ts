import { ApplicationAction, ApplicationActionType, MyAccount, MyTransaction } from "../types";

export interface Request {
  type: ApplicationAction,
  error: string | null
}

export interface ApplicationReducersState {
  accounts: MyAccount[],
  transactions: MyTransaction[],
  requests: Request[]
}

const initialState: ApplicationReducersState = {
  accounts: [],
  transactions: [],
  requests: []
}

const applicationReducer = (state = initialState, action: ApplicationActionType): ApplicationReducersState => {
  switch (action.type) {
    case ApplicationAction.FetchAccounts:
      return {
        ...state,
        requests: [...state.requests, { type: action.type, error: null }]
      };
    case ApplicationAction.FetchAccountsSuccess:
      return {
        ...state,
        requests: state.requests.filter(request => request.type !== ApplicationAction.FetchAccounts),
        accounts: action.payload // Replace everything to simplify it.
      };
    case ApplicationAction.FetchAccountsFailed:
      return {
        ...state,
        requests: state.requests.map(request => request.type === ApplicationAction.FetchAccounts ? { ...request, error: action.payload } : request)
      };
    case ApplicationAction.FetchTransactions:
      return {
        ...state,
        requests: [...state.requests, { type: action.type, error: null }]
      };
    case ApplicationAction.FetchTransactionsSuccess:
      return {
        ...state,
        requests: state.requests.filter(request => request.type !== ApplicationAction.FetchTransactions),
        transactions: action.payload // Replace everything to simplify it.
      };
    case ApplicationAction.FetchTransactionsFailed:
      return {
        ...state,
        requests: state.requests.map(request => request.type === ApplicationAction.FetchTransactions ? { ...request, error: action.payload } : request)
      };
    default:
      return state;
  }
}

export default applicationReducer;

import React, { FunctionComponent } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Transaction from 'pages/Transaction';
import { useSelector } from 'react-redux';
import { fetchTransactions, getTransactions, MyTransaction, RootState } from 'store';
import { useFetch } from 'hooks/fetch';

interface ParamTypes {
  accountId: string;
}

const Account: FunctionComponent = () => {
  const { accountId } = useParams<ParamTypes>();
  const transactions = useSelector<RootState, MyTransaction[]>((state) => getTransactions(state, accountId));
  const { url, path } = useRouteMatch();

  useFetch(fetchTransactions, accountId);

  return (
    <div className="position-relative">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">From</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(item =>
            <tr>
              <td>{item.from}</td>
              <td>{item.amount}</td>
              <td>{item.transaction_date}</td>
              <td>{item.transaction_processed ? 'Complete' : 'Incomplete'}</td>
              <td>
                <Link to={`${url}/${item.id}`}>
                  <button type="button" className="btn btn-primary btn-sm">Next</button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Route path={`${path}/:transactionId`} component={Transaction} />
    </div>
  );
}

export default Account;

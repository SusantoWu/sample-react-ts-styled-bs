import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Dashboard from 'layouts/Dashboard/Dashboard';
import Account from 'pages/Account';
import { ApplicationAction, fetchAccounts, getAccounts, MyAccount, RootState } from 'store';
import { useFetch } from 'hooks/fetch';
import Loader from 'components/Loader';

const Accounts: FunctionComponent = () => {
  const accounts = useSelector<RootState, MyAccount[]>((state) => getAccounts(state));

  useFetch(fetchAccounts);

  return (
    <React.Fragment>
      <Dashboard
        left={
          <div className="list-group list-group-flush mx-n3">
            {accounts.map(item =>
              <Link key={item.id} to={`/${item.id}`} className="list-group-item list-group-item-action bg-transparent">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{item.account_name}</h5>
                  <small>{item.is_active ? 'Active' : 'Inactive'}</small>
                </div>
                <p className="mb-1">{item.currency} {item.balance}</p>
                <small>{item.account_type} {item.account_number}</small>
              </Link>
            )}
          </div>
        }
        right={<Route path="/:accountId" component={Account} />}
      />
      <Loader type={ApplicationAction.FetchAccounts} />
    </React.Fragment>
  );
}

export default Accounts;

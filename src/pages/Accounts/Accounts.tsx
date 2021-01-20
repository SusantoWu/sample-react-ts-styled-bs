import React, { FunctionComponent } from 'react';
import { Link, Route } from 'react-router-dom';
import Dashboard from 'layouts/Dashboard/Dashboard';
import Account from 'pages/Account';

const Accounts: FunctionComponent = () => {
  const test = [
    {
      "id": 1,
      "account_name": "Savings Account",
      "account_type": "savings",
      "balance": 32334.32,
      "currency": "SGD",
      "account_number": "342423455344",
      "is_active": true
    },
    {
      "id": 2,
      "account_name": "Bonus Savings Account",
      "account_type": "savings",
      "balance": -5.11,
      "currency": "AUD",
      "account_number": "156478245",
      "is_active": true
    },
    {
      "id": 3,
      "account_name": "Securities Settlement Account",
      "account_type": "settlement",
      "balance": 0,
      "currency": "SGD",
      "account_number": "945783554",
      "is_active": false
    },
    {
      "id": 4,
      "account_name": "Bonus Saver Card",
      "account_type": "cc",
      "balance": -5021.11,
      "currency": "SGD",
      "account_number": "1751355",
      "is_active": true
    }
  ];
  return (
    <Dashboard
      left={
        <div className="list-group list-group-flush mx-n3">
          {test.map(item =>
            <Link to={`/${item.id}`} className="list-group-item list-group-item-action bg-transparent">
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
  );
}

export default Accounts;

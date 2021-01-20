import React, { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom';

interface ParamTypes {
  accountId: string;
  transactionId: string;
}

const Transaction: FunctionComponent = () => {
  const test = {
    "id": 1,
    "account_id": 1,
    "description": "Dolore quis ad et mollit nisi excepteur ex anim fugiat quis ipsum exercitation proident cupidatat. Quis anim incididunt excepteur cupidatat aliquip nulla reprehenderit velit. Dolor pariatur velit consectetur dolore aliquip reprehenderit non aliqua consectetur. Sunt aliquip consequat et in eu aute.\r\n",
    "from": "Savings Account - 342423455344",
    "transaction_date": "2019-06-08T03:37:28 -08:00",
    "transaction_processed": true,
    "amount": "$1,373.41"
  }

  const { accountId } = useParams<ParamTypes>();

  return (
    <div className="position-absolute top-0 start-0 bottom-0 end-0 bg-white">
      <div className="p-2 border-bottom">
        <Link to={`/${accountId}`}>
          <button type="button" className="btn btn-primary btn-sm">Back</button>
        </Link>
      </div>
      <dl className="row px-2 py-3">
        {Object.keys(test).map(propKey =>
          <React.Fragment>
            <dt className="col-sm-4">{propKey}</dt>
            <dd className="col-sm-8">{String(test[propKey as keyof typeof test])}</dd>
          </React.Fragment>
        )}
      </dl>
    </div>
  );
}

export default Transaction;

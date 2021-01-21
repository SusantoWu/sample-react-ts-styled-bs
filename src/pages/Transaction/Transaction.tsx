import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTransaction, MyTransaction, RootState } from 'store';

interface ParamTypes {
  accountId: string;
  transactionId: string;
}

const Transaction: FunctionComponent = () => {
  const { accountId, transactionId } = useParams<ParamTypes>();
  const transaction = useSelector<RootState, MyTransaction | undefined>((state) => getTransaction(state, transactionId));
  
  return (
    <div className="position-absolute top-0 start-0 bottom-0 end-0 bg-white">
      <div className="p-2 border-bottom">
        <Link to={`/${accountId}`}>
          <button type="button" className="btn btn-primary btn-sm">Back</button>
        </Link>
      </div>
      {transaction &&
        <dl className="row px-2 py-3">
          {Object.keys(transaction).map(propKey =>
            <React.Fragment>
              <dt className="col-sm-4">{propKey}</dt>
              <dd className="col-sm-8">{String(transaction[propKey as keyof typeof transaction])}</dd>
            </React.Fragment>
          )}
        </dl>
      }
    </div>
  );
}

export default Transaction;

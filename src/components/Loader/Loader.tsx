import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { getRequest, Request, RootState, ApplicationAction } from 'store';
import './Loader.scss';

export interface LoaderProps {
  type: ApplicationAction;
}

const Loader: FunctionComponent<LoaderProps> = ({ type }) => {
  const request = useSelector<RootState, Request | undefined>((state) => getRequest(state, type));
  return request ? (
    <div className="loader position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
      {request.error ?
        (<h3 className="text-danger">{request.error}</h3>) :
        (<div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>)
      }
    </div>
  ) : null;
}

export default Loader;

import { FunctionComponent, useState } from 'react';
import './Dashboard.scss';

interface DashboardProps {
  left: JSX.Element;
  right: JSX.Element;
}

const Dashboard: FunctionComponent<DashboardProps> = ({ left, right }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`dashboard container-fluid${open ? ' is-open' : ''}`}>
      <div className="row">
        <div className="dashboard-left col-md-4 bg-light border-end">
          {left}
        </div>
        <div className="dashboard-right col-md-8 ms-sm-auto overflow-auto">
          {right}
        </div>
      </div>
      <button type="button" className="dashboard-btn btn btn-success btn-sm rounded shadow" onClick={() => setOpen(!open)}>Accounts</button>
    </div>
  );
}

export default Dashboard;

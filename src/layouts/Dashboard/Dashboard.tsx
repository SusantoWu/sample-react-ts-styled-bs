import { FunctionComponent } from 'react';
import './Dashboard.scss';

interface DashboardProps {
  left: JSX.Element;
  right: JSX.Element;
}

const Dashboard: FunctionComponent<DashboardProps> = ({ left, right }) => {
  return (
    <div className="dashboard container-fluid">
      <div className="row">
        <div className="dashboard-left col-md-4 bg-light border-end overflow-auto">
          {left}
        </div>
        <div className="dashboard-right col-md-8 ms-sm-auto overflow-auto">
          {right}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

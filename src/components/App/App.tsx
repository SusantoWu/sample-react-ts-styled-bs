import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import Header from 'components/Header';
import Accounts from 'pages/Accounts';
import './App.scss';

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <Route path="/" component={Accounts} />
    </React.Fragment>
  );
}

export default App;

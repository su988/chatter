import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Dashboard from './pages/Dashboard';
import ChannelDashboard from '../src/pages/ChannelDashboard';

function App() {
  return (
    <>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <ProtectedRoute exact path='/' component={Dashboard} />
          <ProtectedRoute path='/:channelId' component={ChannelDashboard} />
        </Switch>
      </div>
    </>
  );
}

export default App;

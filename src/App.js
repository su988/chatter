import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './pages/Dashboard';
import UserProfile from './components/UserProfile';
import ChannelDashboard from '../src/pages/ChannelDashboard';

function App() {
  return (
    <>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <ProtectedRoute exact path='/' component={Dashboard} />
          <ProtectedRoute path='/user-profile' component={UserProfile} />
          <ProtectedRoute path='/:channelId' component={ChannelDashboard} />
        </Switch>
      </div>
    </>
  );
}

export default App;

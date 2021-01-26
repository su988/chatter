import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import Channel from './components/Channel';

function App() {
  return (
    <>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <ProtectedRoute exact path='/' component={Dashboard} />
          <ProtectedRoute exact path='/:channel' component={Channel} />
          <ProtectedRoute path='/user-profile' component={UserProfile} />
        </Switch>
      </div>
    </>
  );
}

export default App;

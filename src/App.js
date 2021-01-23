import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import ChatRoom from './components/ChatRoom';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <ProtectedRoute path='/' component={ChatRoom} />
          <ProtectedRoute path='/profile' component={UserProfile} />
        </Switch>
      </div>
    </>
  );
}

export default App;

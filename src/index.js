import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ChannelProvider } from './contexts/ChannelContext';
import { MessageProvider } from './contexts/MessageContext';
import { UserProvider } from './contexts/UserContext';
import './index.css';

import App from './App';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <UserProvider>
        <ChannelProvider>
          <MessageProvider>
            <App />
          </MessageProvider>
        </ChannelProvider>
      </UserProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);

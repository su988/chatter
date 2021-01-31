import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ChannelProvider } from './contexts/ChannelContext';
import './index.css';

import App from './App';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <ChannelProvider>
        <App />
      </ChannelProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);

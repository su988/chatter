import React, { Fragment } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ChannelList from './ChannelList';
import Main from './Main';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <>
      <h2>Dashboard</h2>
      <ChannelList />
      <br></br>
      <p>user profile icon</p>
      <button onClick={logout}>Logout</button>
      <Main />
    </>
  );
}

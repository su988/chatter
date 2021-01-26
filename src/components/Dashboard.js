import React, { Fragment } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './Sidebar';
import Main from './Main';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <>
      <h2>Dashboard</h2>
      <Sidebar />
      <Main />
      <button onClick={logout}>Logout</button>
    </>
  );
}

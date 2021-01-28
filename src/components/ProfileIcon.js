import React, { Fragment } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function ProfileIcon() {
  const { logout } = useAuth();

  return (
    <>
      <p>user profile icon</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}

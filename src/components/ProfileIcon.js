import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProfileIcon() {
  const { logout } = useAuth();

  return (
    <>
      <h4>user profile icon</h4>
      <Link to='/user-profile'>
        <div>Profile</div>
      </Link>
      <button onClick={logout}>Logout</button>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './ProfileIcon.css';

export default function ProfileIcon() {
  const { logout } = useAuth();

  return (
    <div className='profileIcon'>
      <Link to='/user-profile'>
        <div>Profile</div>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

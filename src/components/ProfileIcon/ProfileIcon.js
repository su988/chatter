import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';
import './ProfileIcon.css';
import { Initial } from 'react-initial';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export default function ProfileIcon() {
  const { logout, currentUser } = useAuth();
  const { getCurrentUserInfo, username } = useUser();

  useEffect(() => {
    getCurrentUserInfo(currentUser.uid);
  }, []);

  return (
    <div className='profileIcon'>
      <Initial
        name={`${username}`}
        height={42}
        width={42}
        fontSize={16}
        color={'#252329'}
      />
      <p>{username}</p>

      {/* <div className='profile_setting'>
        <Link to='/user-profile'>
          <div>Profile</div>
        </Link>
      </div> */}

      <button onClick={logout}>
        <RiLogoutBoxRLine />
      </button>
    </div>
  );
}

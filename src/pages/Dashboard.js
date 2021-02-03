import React from 'react';
import AllChannels from '../components/AllChannels/AllChannels';
import Welcome from '../components/Welcome/Welcome';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <AllChannels />
      <Welcome />
    </div>
  );
}

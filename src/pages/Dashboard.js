import React, { Fragment } from 'react';
import ChannelList from '../components/ChannelList';
import Welcome from '../components/Welcome';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <ChannelList />
      <Welcome />
    </div>
  );
}

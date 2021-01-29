import React, { Fragment } from 'react';
import ChannelList from './ChannelList';
import Welcome from './Welcome';

export default function Dashboard() {
  return (
    <>
      <ChannelList />
      <Welcome />
    </>
  );
}

import React, { Fragment } from 'react';
import ChannelList from './ChannelList';
import Messages from './Messages';

export default function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <ChannelList />
      <br />
      <br />
      <Messages />
    </>
  );
}

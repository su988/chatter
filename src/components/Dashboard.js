import React, { Fragment } from 'react';
import ChannelList from './ChannelList';
// import MessageList from './MessageList';

export default function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <ChannelList />
      <br />
      <br />
      {/* <MessageList /> */}
    </>
  );
}

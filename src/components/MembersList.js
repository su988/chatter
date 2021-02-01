import React, { Fragment, useEffect } from 'react';
import { useChannel } from '../contexts/ChannelContext';

export default function MembersList({ channelId }) {
  const { getChannelMembers, channelMembers } = useChannel();

  useEffect(() => {
    getChannelMembers(channelId);
  }, []);

  const renderList =
    channelMembers &&
    channelMembers.map((user, index) => <div key={index}>{user}</div>);

  return (
    <>
      <h4>Members List</h4>
      {renderList && renderList}
    </>
  );
}

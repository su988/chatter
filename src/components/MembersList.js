import React, { Fragment, useEffect } from 'react';
import { useChannel } from '../contexts/ChannelContext';
import { Initial } from 'react-initial';
import './MembersList.css';

export default function MembersList({ channelId }) {
  const { getChannelMembers, channelMembers } = useChannel();

  useEffect(() => {
    getChannelMembers(channelId);
  }, []);

  const renderList =
    channelMembers &&
    channelMembers.map((user, index) => (
      <div className='member_info' key={index}>
        <Initial
          name={`${user}`}
          height={42}
          width={42}
          fontSize={16}
          color={'#252329'}
        />
        <div className='member_name'>{user}</div>
      </div>
    ));

  return (
    <>
      <h4 className='members_header'>Members</h4>
      <div className='member_list'>{renderList && renderList}</div>
    </>
  );
}

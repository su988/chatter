import React, { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useChannel } from '../contexts/ChannelContext';
import Sidebar from './Sidebar';
import SelectedChannelInfo from './SelectedChannelInfo';
import MembersList from './MembersList';
import ProfileIcon from './ProfileIcon';
import MessageList from './MessageList';

export default function SelectedChannel() {
  const { channelId } = useParams();
  const { currentUser } = useAuth();
  const {
    getChannelInfo,
    addUserToChannel,
    channelName,
    channelDescription
  } = useChannel();

  useEffect(() => {
    getChannelInfo(channelId);
  }, []);

  useEffect(() => {
    addUserToChannel(currentUser.uid, channelId);
  }, []);

  return (
    <>
      <Sidebar>
        <Link to='/'>Back to all channels</Link>
        <SelectedChannelInfo
          name={channelName}
          description={channelDescription}
        />
        <MembersList channelId={channelId} />
        <ProfileIcon />
      </Sidebar>
      <MessageList channelId={channelId} currentUser={currentUser} />
    </>
  );
}

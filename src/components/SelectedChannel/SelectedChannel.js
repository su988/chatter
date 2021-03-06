import React, { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useChannel } from '../../contexts/ChannelContext';
import Sidebar from '../Sidebar/Sidebar';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import SelectedChannelInfo from '../SelectedChannelInfo/SelectedChannelInfo';
import MembersList from '../MembersList/MembersList';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import MessageList from '../MessageList/MessageList';
import './SelectedChannel.css';
import { IoIosArrowBack } from 'react-icons/io';

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
  }, [getChannelInfo, channelId]);

  useEffect(() => {
    addUserToChannel(currentUser.uid, channelId);
  }, [addUserToChannel, currentUser.uid, channelId]);

  return (
    <>
      <Sidebar>
        <SidebarHeader className='extra'>
          <IoIosArrowBack />
          <Link className='all_channels' to='/'>
            All channels
          </Link>
        </SidebarHeader>

        <SelectedChannelInfo
          name={channelName}
          description={channelDescription}
        />
        <MembersList channelId={channelId} />
        <ProfileIcon />
      </Sidebar>
      <MessageList
        channelName={channelName}
        channelId={channelId}
        currentUser={currentUser}
      />
    </>
  );
}

import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './Sidebar';
import SelectedChannelInfo from './SelectedChannelInfo';
import MembersList from './MembersList';
import ProfileIcon from './ProfileIcon';
import MessageList from './MessageList';

export default function SelectedChannel() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { channelId } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    getChannelInfo(channelId);
  }, []);

  useEffect(() => {
    addUserToChannel(currentUser.uid, channelId);
  }, []);

  const addUserToChannel = (userId, channelId) => {
    const channelRef = db.ref('Users').child(userId).child('channels');
    channelRef.update({ [channelId]: true });
  };

  const getChannelInfo = (id) => {
    const channelRef = db.ref('Channels').child(id);
    channelRef.on('value', (snapshot) => {
      setName(snapshot.val().name);
      setDescription(snapshot.val().description);
    });
  };

  return (
    <>
      <Sidebar>
        <Link to='/'>
          <div> Back to all channels</div>
        </Link>
        <SelectedChannelInfo name={name} description={description} />
        <MembersList channelId={channelId} />
        <ProfileIcon />
      </Sidebar>
      <MessageList channelId={channelId} currentUser={currentUser} />
    </>
  );
}

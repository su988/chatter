import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from './Sidebar';
import UserList from './UserList';
import ProfileIcon from './ProfileIcon';

export default function SelectedChannel() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { channelId } = useParams();
  const { currentUser } = useAuth();

  useEffect(() => {
    const channelRef = db.ref('Channels').child(channelId);
    channelRef.on('value', (snapshot) => {
      setName(snapshot.val().name);
      setDescription(snapshot.val().description);
    });
  }, []);

  useEffect(() => {
    // every time user clicks a channel, it gets added to users channel key {channelId : true}
    const channelRef = db.ref('Users').child(currentUser.uid).child('channels');
    channelRef.update({ [channelId]: true });
  }, []);

  return (
    <Sidebar>
      <Link to='/'>
        <div> Back to all channels</div>
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>Members List</h4>
      <UserList channelId={channelId} />
      <ProfileIcon />
    </Sidebar>
  );
}

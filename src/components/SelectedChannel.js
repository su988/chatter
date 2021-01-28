import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../services/firebase';
import Sidebar from './Sidebar';
import ProfileIcon from './ProfileIcon';

export default function SelectedChannel() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { channelId } = useParams();

  useEffect(() => {
    const channelRef = db.ref('Channels').child(channelId);
    channelRef.on('value', (snapshot) => {
      setName(snapshot.val().name);
      setDescription(snapshot.val().description);
    });
  }, []);

  return (
    <Sidebar>
      <Link to='/'>
        <div> Back to all channels</div>
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>Members List</h4>
      <ProfileIcon />
    </Sidebar>
  );
}

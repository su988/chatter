import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import NewChannelForm from './NewChannelForm';
import Channel from './Channel';
import ProfileIcon from './ProfileIcon';
import { db } from '../services/firebase';

export default function ChannelList() {
  const [channelList, setChannelList] = useState();
  const [filteredList, setFilteredList] = useState();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const channelRef = db.ref('Channels');
    channelRef.on('value', (snapshot) => {
      const channels = snapshot.val();
      const tempList = [];
      for (let id in channels) {
        tempList.push({ id, ...channels[id] });
      }
      setChannelList(tempList);
      setFilteredList(tempList);
    });
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value);
    filterChannels(e.target.value);
  };

  const filterChannels = (input) => {
    setFilteredList(
      channelList.filter((channel) =>
        channel.name.toLowerCase().includes(input)
      )
    );
  };

  const renderList =
    filteredList &&
    filteredList.map((channel, index) => (
      <Channel channel={channel} key={index} />
    ));

  return (
    <Sidebar>
      <h2>ChannelList</h2>
      <NewChannelForm />
      <input
        type='text'
        name='keyword'
        placeholder='Search'
        value={keyword}
        onChange={handleChange}
      />
      {renderList}
      <ProfileIcon />
    </Sidebar>
  );
}

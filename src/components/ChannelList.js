import React, { useState } from 'react';
import Sidebar from './Sidebar';
import NewChannelForm from './NewChannelForm';
import InputField from './InputField';
import Channel from './Channel';
import ProfileIcon from './ProfileIcon';
import { useChannel } from '../contexts/ChannelContext';

export default function ChannelList() {
  const { filteredList, filterChannels } = useChannel();
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
    filterChannels(e.target.value);
  };

  const renderList =
    filteredList &&
    filteredList.map((channel, index) => (
      <Channel channel={channel} key={index} />
    ));

  return (
    <Sidebar>
      <NewChannelForm />
      <InputField
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

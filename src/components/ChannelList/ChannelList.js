import React, { Fragment, useState } from 'react';
import InputField from '../InputField/InputField';
import Channel from '../Channel/Channel';
import { useChannel } from '../../contexts/ChannelContext';
import './ChannelList.css';

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
    <>
      <InputField
        type='text'
        name='keyword'
        placeholder='Search'
        value={keyword}
        onChange={handleChange}
        class_name={'sidebar_channel_search'}
      />
      {renderList}
    </>
  );
}

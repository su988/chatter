import React, { useState, useEffect, useContext } from 'react';
import { db } from '../services/firebase';

const ChannelContext = React.createContext();

export function useChannel() {
  return useContext(ChannelContext);
}

export function ChannelProvider({ children }) {
  const [channelList, setChannelList] = useState();
  const [filteredList, setFilteredList] = useState();

  useEffect(() => {
    getChannelListData();
  }, []);

  const getChannelListData = () => {
    const channelRef = db.ref('Channels');
    channelRef.on('value', (snapshot) => {
      const channels = snapshot.val();
      let tempList = [];
      for (let id in channels) {
        tempList.push({ id, ...channels[id] });
      }
      setChannelList(tempList);
      setFilteredList(tempList);
    });
  };

  const createNewChannel = (name, description) => {
    const channelRef = db.ref('Channels');
    const channel = {
      name,
      description
    };

    channelRef.push(channel);
  };

  const filterChannels = (input) => {
    setFilteredList(
      channelList.filter((channel) =>
        channel.name.toLowerCase().includes(input)
      )
    );
  };

  const value = {
    filteredList,
    createNewChannel,
    filterChannels
  };

  return (
    <ChannelContext.Provider value={value}>{children}</ChannelContext.Provider>
  );
}

import React, { useState, useEffect, useContext } from 'react';
import { db } from '../services/firebase';

const ChannelContext = React.createContext();

export function useChannel() {
  return useContext(ChannelContext);
}

export function ChannelProvider({ children }) {
  const [channelList, setChannelList] = useState();
  const [filteredList, setFilteredList] = useState();
  const [channelName, setChannelName] = useState();
  const [channelDescription, setChannelDescription] = useState();

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

  const addUserToChannel = (userId, channelId) => {
    const channelRef = db.ref('Users').child(userId).child('channels');
    channelRef.update({ [channelId]: true });
  };

  const getChannelInfo = (id) => {
    const channelRef = db.ref('Channels').child(id);
    channelRef.on('value', (snapshot) => {
      setChannelName(snapshot.val().name);
      setChannelDescription(snapshot.val().description);
    });
  };

  const value = {
    filteredList,
    createNewChannel,
    filterChannels,
    addUserToChannel,
    getChannelInfo,
    channelName,
    channelDescription
  };

  return (
    <ChannelContext.Provider value={value}>{children}</ChannelContext.Provider>
  );
}

import React, { useState, useEffect, useContext } from 'react';
import { db } from '../services/firebase';
import { useHistory } from 'react-router-dom';

const ChannelContext = React.createContext();

export function useChannel() {
  return useContext(ChannelContext);
}

export function ChannelProvider({ children }) {
  const [channelList, setChannelList] = useState();
  const [filteredList, setFilteredList] = useState();
  const [channelName, setChannelName] = useState();
  const [channelDescription, setChannelDescription] = useState();
  const [channelMembers, setChannelMembers] = useState();
  const history = useHistory();

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
      if (snapshot.val()) {
        setChannelName(snapshot.val().name);
        setChannelDescription(snapshot.val().description);
      } else {
        history.push('/');
      }
    });
  };

  const getChannelMembers = (channelId) => {
    let userRef = db.ref('Users');
    userRef.on('value', (snapshot) => {
      const users = snapshot.val();
      let tempList = [];
      for (let id in users) {
        if (users[id]['channels'][channelId]) {
          tempList.push(users[id]['username']);
        }
      }

      setChannelMembers(tempList);
    });
  };

  const value = {
    filteredList,
    createNewChannel,
    filterChannels,
    addUserToChannel,
    getChannelInfo,
    channelName,
    channelDescription,
    getChannelMembers,
    channelMembers
  };

  return (
    <ChannelContext.Provider value={value}>{children}</ChannelContext.Provider>
  );
}

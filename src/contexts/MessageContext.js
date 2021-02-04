import React, { useContext, useState } from 'react';
import { db } from '../services/firebase';

const MessageContext = React.createContext();

export function useMessage() {
  return useContext(MessageContext);
}

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState();

  const createNewMessage = (
    channelId,
    userID,
    text,
    username,
    photoUrl,
    timestamp
  ) => {
    const messageRef = db.ref('Messages/' + channelId);
    const message = {
      userId: userID,
      text: text,
      username: username,
      photoUrl: photoUrl,
      created: timestamp
    };
    messageRef.push(message);
  };

  const getMessagesInChannel = (channelId) => {
    const messageRef = db.ref('Messages/' + channelId);
    messageRef.on('value', (snapshot) => {
      let tempList = [];
      const messages = snapshot.val();
      for (let id in messages) {
        tempList.push(messages[id]);
      }

      setMessages(tempList);
    });
  };

  const value = { createNewMessage, getMessagesInChannel, messages };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
}

import React, { useEffect, useRef } from 'react';
import MainPanel from './MainPanel';
import Messages from './Messages';
import { useMessage } from '../contexts/MessageContext';
import { useUser } from '../contexts/UserContext';

export default function MessageList({ channelId, currentUser }) {
  const textRef = useRef();
  const { createNewMessage, getMessagesInChannel, messages } = useMessage();
  const { getCurrentUserInfo, username, photoUrl } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewMessage(
      channelId,
      currentUser.uid,
      textRef.current.value,
      username,
      photoUrl,
      Date.now()
    );

    textRef.current.value = '';
  };

  useEffect(() => {
    getCurrentUserInfo(currentUser.uid);
  }, []);

  useEffect(() => {
    //get all messages from selected channel
    getMessagesInChannel(channelId);
  }, []);

  return (
    <MainPanel>
      <Messages messages={messages} />
      <form onSubmit={handleSubmit}>
        <input type='text' ref={textRef} />
        <input type='submit' value='Submit' />
      </form>
    </MainPanel>
  );
}

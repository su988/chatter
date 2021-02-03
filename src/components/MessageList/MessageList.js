import React, { useEffect, useRef } from 'react';
import MainPanel from '../MainPanel/MainPanel';
import Messages from '../Messages/Messages';
import { useMessage } from '../../contexts/MessageContext';
import { useUser } from '../../contexts/UserContext';
import { IoMdSend } from 'react-icons/io';
import './MessageList.css';

export default function MessageList({ channelId, currentUser, channelName }) {
  const textRef = useRef();
  const { getCurrentUserInfo, username, photoUrl } = useUser();
  const { createNewMessage, getMessagesInChannel, messages } = useMessage();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (textRef.current.value === '') {
      return;
    }
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
      <div className='message_panel'>
        <div className='message_panel_header'>{channelName}</div>
        <Messages messages={messages} />
        <form className='message_input' onSubmit={handleSubmit}>
          <input
            className='message_input_text'
            placeholder='Enter Message here'
            type='text'
            ref={textRef}
          />

          <button className='message_submit_btn'>
            <IoMdSend />
          </button>
        </form>
      </div>
    </MainPanel>
  );
}

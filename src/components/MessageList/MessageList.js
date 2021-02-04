import React, { useEffect, useRef } from 'react';
import MainPanel from '../MainPanel/MainPanel';
import Messages from '../Messages/Messages';
import { useMessage } from '../../contexts/MessageContext';
import { useUser } from '../../contexts/UserContext';
import { IoMdSend } from 'react-icons/io';
import './MessageList.css';

export default function MessageList({ channelId, currentUser, channelName }) {
  const textRef = useRef();
  const messagesEndRef = useRef(null);
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    getCurrentUserInfo(currentUser.uid);
  }, [getCurrentUserInfo, currentUser.uid]);

  useEffect(() => {
    //get all messages from selected channel
    getMessagesInChannel(channelId);
  }, [getMessagesInChannel, channelId]);

  return (
    <MainPanel>
      <div className='message_panel_header'>{channelName}</div>

      <div className='message_panel'>
        <Messages messages={messages} />
        <div ref={messagesEndRef} />
      </div>

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
    </MainPanel>
  );
}

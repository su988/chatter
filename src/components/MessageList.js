import React, { useState, useEffect, useRef } from 'react';
import { db } from '../services/firebase';
import Main from './Main';

export default function MessageList({ channelId, currentUser }) {
  const [messageList, setMessageList] = useState();
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add new message to db
    //Messages: channelId: {text, timestamp, userId}
    const messageRef = db.ref('Messages/' + channelId);
    const message = {
      text: textRef.current.value,
      userId: currentUser.uid,
      created: Date.now()
    };
    messageRef.push(message);
    textRef.current.value = '';
  };

  useEffect(() => {
    const messageRef = db.ref('Messages/' + channelId);
    messageRef.on('value', (snapshot) => {
      let tempList = [];
      const messages = snapshot.val();
      for (let id in messages) {
        console.log(messages[id]['created']);
      }
    });
  }, []);

  return (
    <Main>
      <div>all messages here</div>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={textRef} />
        <input type='submit' value='Submit' />
      </form>
    </Main>
  );
}

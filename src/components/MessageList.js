import React, { useState, useEffect, useRef } from 'react';
import { db } from '../services/firebase';
import MainPanel from './MainPanel';
import Messages from './Messages';

export default function MessageList({ channelId, currentUser }) {
  const [messages, setMessages] = useState();
  const [username, setUsername] = useState();
  const [photoUrl, setPhotoUrl] = useState();
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageRef = db.ref('Messages/' + channelId);
    const message = {
      userId: currentUser.uid,
      text: textRef.current.value,
      username: username,
      photoUrl: photoUrl,
      created: Date.now()
    };
    messageRef.push(message);
    textRef.current.value = '';
  };

  useEffect(() => {
    const userRef = db.ref('Users/' + currentUser.uid);
    userRef.on('value', (snapshot) => {
      const user = snapshot.val();
      setUsername(user['username']);
      setPhotoUrl(user['photoUrl']);
    });
  }, []);

  useEffect(() => {
    const messageRef = db.ref('Messages/' + channelId);
    messageRef.on('value', (snapshot) => {
      let tempList = [];
      const messages = snapshot.val();
      for (let id in messages) {
        tempList.push(messages[id]);
      }

      setMessages(tempList);
    });
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

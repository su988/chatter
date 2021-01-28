import React, { Fragment, useRef } from 'react';
import { db } from '../services/firebase';

export default function NewChannelForm() {
  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    createChannel();
    nameRef.current.value = '';
    descriptionRef.current.value = '';
  };

  const createChannel = () => {
    const channelRef = db.ref('Channels');
    const channel = {
      name: nameRef.current.value,
      description: descriptionRef.current.value
    };

    channelRef.push(channel);
  };

  return (
    <>
      <h5>New channel +</h5>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' ref={nameRef} />
        </label>
        <label>
          Description
          <input type='text' ref={descriptionRef} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
}

import React, { Fragment, useRef } from 'react';
import { useChannel } from '../contexts/ChannelContext';

export default function NewChannelForm() {
  const { createNewChannel } = useChannel();
  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewChannel(nameRef.current.value, descriptionRef.current.value);

    nameRef.current.value = '';
    descriptionRef.current.value = '';
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

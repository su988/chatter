import React, { useRef, useEffect } from 'react';
import { useChannel } from '../../contexts/ChannelContext';
import './NewChannelForm.css';

export default function NewChannelForm({ modal }) {
  const { createNewChannel } = useChannel();
  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleEscape = (event) => {
    if (event.key === 'Escape') modal.current.close();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape, false);

    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value === '' || descriptionRef.current.value === '') {
      return;
    }
    createNewChannel(nameRef.current.value, descriptionRef.current.value);
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    modal.current.close();
  };

  return (
    <div className='channel_form'>
      <p>New channel</p>
      <form onSubmit={handleSubmit}>
        <input
          className='channel_form_name'
          type='text'
          ref={nameRef}
          placeholder='Channel name'
        />
        <textarea
          className='channel_form_description'
          type='text'
          ref={descriptionRef}
          placeholder='Channel Description'
        />
        <input className='channel_form_submit' type='submit' value='Save' />
      </form>
    </div>
  );
}

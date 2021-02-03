import React, { Fragment } from 'react';
import './SelectedChannelInfo.css';

export default function SelectedChannelInfo({ name, description }) {
  return (
    <>
      <h4 className='channel_name'>{name}</h4>
      <p className='channel_description'>{description}</p>
    </>
  );
}

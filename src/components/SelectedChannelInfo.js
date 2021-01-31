import React, { Fragment } from 'react';

export default function SelectedChannelInfo({ name, description }) {
  return (
    <>
      <h4>{name}</h4>
      <p>{description}</p>
    </>
  );
}

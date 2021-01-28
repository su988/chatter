import React, { Fragment } from 'react';

export default function Channel({ channel }) {
  console.log(channel.id);
  return (
    <>
      <div>{channel.name}</div>
    </>
  );
}

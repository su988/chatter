import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Channel({ channel }) {
  console.log(channel.id);
  return (
    <>
      <Link to={`/${channel.id}`}>
        <div>{channel.name}</div>
      </Link>
    </>
  );
}

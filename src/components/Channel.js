import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Channel.css';

export default function Channel({ channel }) {
  return (
    <>
      <Link to={`/${channel.id}`}>{channel.name}</Link>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Initial } from 'react-initial';
import './Channel.css';
import Moment from 'react-moment';

export default function Channel({ channel }) {
  return (
    <div className='channel_list'>
      <Initial
        name={`${channel.name}`}
        height={42}
        width={42}
        fontSize={16}
        color={'#252329'}
        charCount={1}
      />
      <Link to={`/${channel.id}`}>{channel.name}</Link>
    </div>
  );
}

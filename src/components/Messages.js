import React, { Fragment, useRef, useEffect } from 'react';
import { Initial } from 'react-initial';
import Moment from 'react-moment';
import 'moment-timezone';
import './Messages.css';

export default function Messages({ messages }) {
  const renderList =
    messages &&
    messages.map((message, index) => (
      <div key={index} className='messages'>
        <div className='messages_user_pic'>
          <Initial
            name={`${message.username}`}
            height={42}
            width={42}
            fontSize={16}
            color={'#333333'}
          />
        </div>
        <div className='messages_user_info'>
          <span className='messages_username'>{message.username}</span>

          <Moment fromNow>{message.created}</Moment>

          <div className='messages_text'>{message.text}</div>
        </div>
      </div>
    ));

  return <>{renderList && renderList}</>;
}

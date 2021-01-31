import React, { Fragment } from 'react';

export default function Messages({ messages }) {
  const renderList =
    messages &&
    messages.map((message, index) => (
      <div key={index}>
        <img src={`${message.photoUrl}`} alt='' />
        <span>{message.username}</span>
        <span>{message.created}</span>
        <div>{message.text}</div>
      </div>
    ));

  return (
    <>
      <div>{renderList && renderList}</div>
    </>
  );
}

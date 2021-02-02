import React from 'react';
import MainPanel from './MainPanel';
import './Welcome.css';

export default function Welcome() {
  return (
    <MainPanel>
      <div className='welcome'>
        <h1 className='welcome_message'>Welcome to Chatter</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
    </MainPanel>
  );
}

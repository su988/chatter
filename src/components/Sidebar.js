import React from 'react';

export default function Sidebar({ children }) {
  return (
    <div className='sidebar'>
      <h4>hello from sidebar</h4>
      {children}
    </div>
  );
}

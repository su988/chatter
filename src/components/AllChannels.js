import React, { useRef } from 'react';
import Sidebar from './Sidebar';
import NewChannelForm from './NewChannelForm';
import Modal from './Modal';
import ChannelList from './ChannelList';
import ProfileIcon from './ProfileIcon';
import './AllChannels.css';

export default function AllChannels() {
  const modal = useRef(null);
  return (
    <Sidebar>
      <div className='sidebar_header'>
        <p>Channels</p>
        <button onClick={() => modal.current.open()}>+</button>
      </div>
      <Modal ref={modal}>
        <NewChannelForm modal={modal} />
      </Modal>
      <ChannelList />
      <ProfileIcon />
    </Sidebar>
  );
}

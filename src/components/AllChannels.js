import React, { useRef } from 'react';
import Sidebar from './Sidebar';
import SidebarHeader from './SidebarHeader';
import NewChannelForm from './NewChannelForm';
import Modal from './Modal';
import ChannelList from './ChannelList';
import ProfileIcon from './ProfileIcon';
import './AllChannels.css';

export default function AllChannels() {
  const modal = useRef(null);
  return (
    <Sidebar>
      <SidebarHeader class_name={'extra'}>
        <p>Channels</p>
        <button onClick={() => modal.current.open()}>+</button>
      </SidebarHeader>
      <Modal ref={modal}>
        <NewChannelForm modal={modal} />
      </Modal>
      <ChannelList />
      <ProfileIcon />
    </Sidebar>
  );
}

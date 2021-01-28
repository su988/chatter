import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function SelectedChannel() {
  const { channelId } = useParams();
  console.log(channelId);
  return (
    <Sidebar>
      <div>Selected channel</div>
    </Sidebar>
  );
}

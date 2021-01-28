import React from 'react';
import { useParams } from 'react-router-dom';

export default function SelectedChannel() {
  const { channelId } = useParams();
  console.log(channelId);
  return (
    <>
      <div>Selected channel</div>
    </>
  );
}

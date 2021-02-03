import React from 'react';
import './SidebarHeader.css';

export default function SidebarHeader(props) {
  return (
    <div className={`sidebar_header ${props.class_name}`}>{props.children}</div>
  );
}

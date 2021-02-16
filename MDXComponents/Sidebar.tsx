import React from 'react';
import Card from '@material-ui/core/Card';
import SideBarContent from './SidebarContent';

export default function Sidebar() {
  return (
    <Card
      elevation={0}
      style={{
        height: '600px',
        // width: '20%',
        top: '4rem',
        paddingLeft: '20px',
        position: 'fixed',
      }}>
      <div
        style={{
          margin: '0 0 0 auto',
          maxWidth: '300px',
        }}>
        <SideBarContent />
      </div>
    </Card>
  );
}

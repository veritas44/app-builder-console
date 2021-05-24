import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {IconButton, MenuItem, Menu} from '@material-ui/core';
function MenuBox(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = (event: any) => {
    event.persist();
    event.stopPropagation();
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={(event: any) => {
          event.persist();
          event.stopPropagation();
          handleClickMenu(event);
        }}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id={'simple-menu' + props.id}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}>
        <MenuItem onClick={(e)=>{handleCloseMenu(e);props.deleteAction(e)}}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuBox;

import React, {useState} from 'react';
import {MDXProviderProps} from '@mdx-js/react';
import {SwipeableDrawer, Fab, Divider, Typography} from '@material-ui/core';
import SideBar from './Sidebar';
import SideBarContent from './SidebarContent';
import {LinkProvider} from './useActiveLink';
import MenuIcon from '@material-ui/icons/List';
import Helper from '../components/Helper';
import useSmQuerry from '../hooks/useSmQuerry';
import useDrawerToggle from '../hooks/drawerToggle';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import type {ActiveLinkInterface} from './useActiveLink';

const webStyles = {
  position: 'fixed',
  top: '4rem',
  width: '20%',
};

const mobStyles = {
  width: '70vw',
  marginTop: '20px',
  marginLeft: '20px',
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customDrawer: {
      width: '70vw',
    },
    textStyle: {
      color: 'white',
      marginTop:"10px",
      marginLeft:"10px",
    },
    toolbar: {
      height: '3rem',
    },
    fabutton: {
      position: 'fixed',
      bottom: '65px',
      right: '10px',
      zIndex: 10,
    },
  }),
);

function Wrapper(props: MDXProviderProps) {
  const CustomClasses = useStyles();
  const matches = useSmQuerry();
  const [rightDrawerVisible, setRightDrawerVisible] = useState(false);
  const rest = React.Children.toArray(props.children);
  const Toc = rest.shift();
  const [link, setLink] = useState<ActiveLinkInterface['link']>('');
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '1343px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '80px',
        }}>
        <LinkProvider value={{link, setLink}}>
          {matches ? ''
           : (
            <SideBar />
          )}
          <main
            style={
              !matches
                ? {
                    marginLeft: '20%',
                    maxWidth: '766px',
                    padding: '0 2rem',
                  }
                : {
                    margin: '0 10px',
                  }
            }>
            {rest}
          </main>
            {matches ? (
              <>
                <SwipeableDrawer
                  anchor="right"
                  classes={{paperAnchorLeft: CustomClasses.customDrawer}}
                  open={rightDrawerVisible}
                  onClose={() => setRightDrawerVisible(false)}
                  onOpen={() => setRightDrawerVisible(true)}>
                  <div className={CustomClasses.toolbar} />
                  <Divider />
                  <Helper style={mobStyles}>{Toc}</Helper>
                </SwipeableDrawer>
                <Fab
                  onClick={() => {
                    setRightDrawerVisible(true);
                  }}
                  color="primary"
                  classes={{root: CustomClasses.fabutton}}
                  aria-label="right-navigation">
                  <MenuIcon htmlColor="#fff" />
                </Fab>
              </>
            ) : (
              <div>
              <Helper style={webStyles}>{Toc}</Helper>
              </div>
            )}
        </LinkProvider>
      </div>
    </>
  );
}

export default Wrapper;

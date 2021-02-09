import React, {useState} from 'react';
import {MDXProviderProps} from '@mdx-js/react';
import {SwipeableDrawer, Fab} from '@material-ui/core';
import SideBar from './Sidebar';
import SideBarContent from './SidebarContent';
import {LinkProvider} from './useActiveLink';
import MenuIcon from '@material-ui/icons/Menu';
import Helper from '../components/Helper';
import useSmQuerry from '../hooks/useSmQuerry';
import useDrawerToggle from '../hooks/drawerToggle';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import type {ActiveLinkInterface} from './useActiveLink';

const webStyles = {
  position: 'fixed',
  marginLeft: '770px',
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
  const [leftDrawerToggle, setLeftDrawerToggle] = useDrawerToggle(false);
  const [rightDrawerVisible, setRightDrawerVisible] = useState(true);
  const rest = React.Children.toArray(props.children);
  const Toc = rest.shift();
  const [link, setLink] = useState<ActiveLinkInterface['link']>('');
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1343px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <LinkProvider value={{link, setLink}}>
          {matches ? (
            <SwipeableDrawer
              anchor="left"
              classes={{paperAnchorLeft: CustomClasses.customDrawer}}
              open={leftDrawerToggle}
              onClose={() => setLeftDrawerToggle(false)}
              onOpen={() => setLeftDrawerToggle(true)}>
              <SideBarContent />
            </SwipeableDrawer>
          ) : (
            <SideBar />
          )}
          <main
            style={
              !matches
                ? {
                    margin: '0 20%',
                    padding: '0 2rem',
                  }
                : {
                    margin: '0 10px',
                  }
            }>
            {matches ? (
              <>
                <SwipeableDrawer
                  anchor="right"
                  classes={{paperAnchorLeft: CustomClasses.customDrawer}}
                  open={rightDrawerVisible}
                  onClose={() => setRightDrawerVisible(false)}
                  onOpen={() => setRightDrawerVisible(true)}>
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
              <Helper style={webStyles}>{Toc}</Helper>
            )}
            {rest}
          </main>
        </LinkProvider>
      </div>
    </>
  );
}

export default Wrapper;

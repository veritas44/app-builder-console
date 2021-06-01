import React, {useState} from 'react';
import {MDXProviderProps} from '@mdx-js/react';
import {SwipeableDrawer, Fab, Divider} from '@material-ui/core';
import SideBar from './Sidebar';
import {LinkProvider} from './useActiveLink';
import MenuIcon from '@material-ui/icons/List';
import Helper from '../components/Helper';
import useSmQuerry from '../hooks/useSmQuerry';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import {useTheme} from '@material-ui/core/styles';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import type {ActiveLinkInterface} from './useActiveLink';
import Copyright from '../components/Copyright';

const webStyles = {
  position: 'fixed',
  top: '4rem',
  width: '20%',
};

const mobStyles = {
  width: '70vw',
  maxWidth: '300px',
  marginTop: '20px',
  marginLeft: '20px',
};
const useStyles = makeStyles(() =>
  createStyles({
    customDrawer: {
      width: '70vw',
      maxWidth: '500px',
    },
    textStyle: {
      color: 'white',
      marginTop: '10px',
      marginLeft: '10px',
    },
    toolbar: {
      height: '3rem',
      paddingTop: '8px',
      paddingLeft: '8px',
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
  const theme = useTheme();
  const matchSideBar = useMediaQuery(theme.breakpoints.down('md'));
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
          {matches ? (
            ''
          ) : (
            <div style={{width: '280px', minWidth: '280px'}}>
              <SideBar />
            </div>
          )}
          <main
            style={
              !matchSideBar
                ? {
                    maxWidth: '766px',
                    padding: '0 2rem',
                    overflow: 'auto',
                  }
                : {
                    margin: '0 10px',
                    overflow: 'auto',
                  }
            }>
            {rest}
          </main>
          {matchSideBar ? (
            <>
              <SwipeableDrawer
                anchor="right"
                classes={{paperAnchorLeft: CustomClasses.customDrawer}}
                open={rightDrawerVisible}
                onClose={() => setRightDrawerVisible(false)}
                onOpen={() => setRightDrawerVisible(true)}>
                <div className={CustomClasses.toolbar}>
                  <Typography variant="h2" color="textSecondary">
                    Table of Contents
                  </Typography>
                </div>
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
            <div style={{width: '280px', minWidth: '280px'}}>
              <Helper style={webStyles}>{Toc}</Helper>
            </div>
          )}
        </LinkProvider>
      </div>
      <Copyright />
    </>
  );
}

export default Wrapper;

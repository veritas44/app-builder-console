import React, {useState} from 'react';
import {MDXProviderProps} from '@mdx-js/react';
import {
  SwipeableDrawer,
  Fab,
  Divider,
  Box,
  Button,
  IconButton,
  Link,
  // Menu,
  // MenuItem,
  Toolbar,
} from '@material-ui/core';
import SideBar from './Sidebar';
import {LinkProvider} from './useActiveLink';
import MenuIcon from '@material-ui/icons/List';
import Helper from '../components/Helper';
import useSmQuerry from '../hooks/useSmQuerry';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import {Theme, useTheme} from '@material-ui/core/styles';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import type {ActiveLinkInterface} from './useActiveLink';
import Copyright from '../components/Copyright';

const useNavStyles = makeStyles((theme: Theme) =>
  createStyles({
    AppBar: {
      [theme.breakpoints.up('md')]: {
        // display: 'flex',
        paddingLeft: '13%',
      },
      backgroundColor: '#fff',
      paddingRight: '40px',
    },
    Logo: {
      height: '25px',
      marginRight: 'auto',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      marginLeft: 0,
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    button: {
      margin: '0px 10px 0px 10px',
      padding: '10px 20px 10px 20px',
      borderRadius: '50px',
      textTransform: 'unset',
      fontFamily: 'acumin-pro-wide, sans-serif !important',
    },
    popupMenu: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

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
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);
  const rest = React.Children.toArray(props.children);
  const Toc = rest.shift();
  const [link, setLink] = useState<ActiveLinkInterface['link']>('');
  const theme = useTheme();
  const matchSideBar = useMediaQuery(theme.breakpoints.down('md'));
  const NavbarClasses = useNavStyles();
  const [navWhite, setNavWhite] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const handleScroll = () => {
    const navBar: any = document.getElementById('AppBar');
    if (navBar) {
      if (window.scrollY > 70) {
        setNavWhite(() => true);
        navBar.style.backgroundColor = '#fff';
      } else {
        // setNavWhite(() => false);
        // navBar.style.backgroundColor = 'transparent';
      }
    }
  };
  return (
    <>
      <Box position="fixed" width="100%" zIndex={1}>
        <Toolbar className={NavbarClasses.AppBar} id="AppBar">
        <Box
            mx={1}
            className={NavbarClasses.sectionMobile}
            ml="auto"
            color="#fff">
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={() => setMobileSidebarVisible(!mobileSidebarVisible)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center">
            <a href="/">
              <img
                width="130px"
                src={'https://appbuilder.agora.io/splashAssets/logo.png'}
              />
            </a>
          </Box>
          <Box
            mx={7}
            color="#fff"
            className={NavbarClasses.sectionDesktop}
            ml="auto">
            <Button
              className={NavbarClasses.button}
              onClick={() => window.open('https://www.agora.io/')}>
              <Box color={navWhite ? 'black' : 'white'}>Agora.io</Box>
            </Button>
            <Button
              className={NavbarClasses.button}
              // onClick={() => window.open('/docs')}
            >
              <Box color={navWhite ? 'black' : 'white'}>Docs</Box>
            </Button>
            <Button
              className={NavbarClasses.button}
              onClick={() =>
                window.open(
                  'https://join.slack.com/t/agoraiodev/shared_invite/zt-e7ln476c-pfWWYMs40Y7GMPz2i26pwA',
                )
              }>
              <Box color={navWhite ? 'black' : 'white'}>Get Support</Box>
            </Button>
            <Link href="/create">
              <Button
                className={NavbarClasses.button}
                style={{border: '2px solid #00AEFC'}}>
                <Box color={navWhite ? 'black' : 'white'}>Try it Now</Box>
              </Button>
            </Link>
          </Box>
          {/* <Box
            mx={7}
            className={NavbarClasses.sectionMobile}
            ml="auto"
            color="#fff">
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              classes={{
                paper: NavbarClasses.popupMenu,
              }}
              PaperProps={{
                style: {
                  width: '25ch',
                },
              }}>
              <MenuItem>
                <Box
                  className={NavbarClasses.button}
                  onClick={() => window.open('https://www.agora.io/')}>
                  Agora.io
                </Box>
              </MenuItem>
              <MenuItem>
                <Box
                  onClick={() => window.open('/docs')}
                  className={NavbarClasses.button}>
                  Docs
                </Box>
              </MenuItem>
              <MenuItem>
                <Box
                  onClick={() =>
                    window.open(
                      'https://join.slack.com/t/agoraiodev/shared_invite/zt-e7ln476c-pfWWYMs40Y7GMPz2i26pwA',
                    )
                  }
                  className={NavbarClasses.button}>
                  Get Support
                </Box>
              </MenuItem>
              <MenuItem>
                <Link href="/create" style={{textDecoration: 'none'}}>
                  <Box
                    className={NavbarClasses.button}
                    style={{border: '1px solid #00AEFC'}}>
                    Try it Now
                  </Box>
                </Link>
              </MenuItem>
            </Menu>
          </Box> */}
        </Toolbar>
      </Box>
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
            mobileSidebarVisible ? (
              <div style={{ width: '280px', minWidth: '280px' }}>
                <SideBar />
              </div>
            ) : (
              ''
            )
          ) : (
            <div style={{width: '280px', minWidth: '280px'}}>
              <SideBar />
            </div>
          )}
          <main
            style={
              !matchSideBar
                ? {
                    marginTop: '64px',
                    maxWidth: '766px',
                    padding: '0 2rem',
                    overflow: 'auto',
                  }
                : {
                    margin: '0 10px',
                    marginTop: '60px',
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

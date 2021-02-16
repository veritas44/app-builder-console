import React, {useState, useRef, useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {
  Button,
  IconButton,
  Paper,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useRouter} from 'next/router';
import useDrawerToggle from '../hooks/drawerToggle';
import SideBarContent from '../MDXComponents/SidebarContent';
// import {getLeftDrawerToggle , setLeftDrawerToggle} from '../hooks/drawerToggle';
import Link from './Link';
import useSmQuerry from '../hooks/useSmQuerry';
import type {LinkProps} from 'next/link';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: '100vw',
      paddingLeft: '0',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    leftSection: {
      display: 'flex',
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    rightSection: {
      display: 'flex',
    },
    appBar: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      zIndex: 25,
    },
    navButton: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
    },
    navButtonActive: {
      borderBottomColor: theme.palette.primary.main,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderWidth: '0px',
      borderStyle: 'solid',
    },
    navBottomBar: {
      width: 'auto',
      height: '5px',
      backgroundColor: theme.palette.primary.main,
      marginTop: 'auto',
    },
    rightButton: {
      marginLeft: '10px',
    },
    customDrawer: {
      width: '70vw',
    },
    textStyle: {
      marginTop: '10px',
      marginLeft: '10px',
    },
    toolbar: {
      height: '3rem',
    },
  }),
);

interface navButtonProps {
  route: LinkProps['href'];
  text: string;
}

function NavButton(props: navButtonProps) {
  const router = useRouter();
  const classes = useStyles();
  return (
    <div className={classes.navButton}>
      <Link
        style={{textDecoration: 'none', marginTop: '5px'}}
        href={props.route}>
        <Button
          variant="text"
          disableRipple
          disableTouchRipple
          disableFocusRipple
          style={{color: 'black'}}
          disableElevation>
          {props.text}
        </Button>
      </Link>
      {router.pathname.split('/')[1] ===
        (props.route as string).split('/')[1] && (
        <div className={classes.navBottomBar} />
      )}
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const matches = useSmQuerry();
  const [isSticky, setSticky] = useState(false);
  const [leftDrawerToggle, setLeftDrawerToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < 0);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const classes = useStyles();

  return (
    <>
      {/* Dummy element that renders behind navbar*/}
      <div ref={ref} className={classes.root} />
      <Paper className={classes.appBar} elevation={isSticky ? 3 : 0} square>
        <Container className={classes.root}>
          <div className={classes.leftSection}>
            {matches && router.pathname.split('/')[1] == 'docs' ? (
              <>
                <IconButton onClick={() => setLeftDrawerToggle(true)}>
                  <MenuIcon color="primary" />
                </IconButton>
                <SwipeableDrawer
                  anchor="left"
                  classes={{paperAnchorLeft: classes.customDrawer}}
                  open={leftDrawerToggle}
                  onClose={() => setLeftDrawerToggle(false)}
                  onOpen={() => setLeftDrawerToggle(true)}>
                  <div
                    style={{backgroundColor: '#eee'}}
                    className={classes.toolbar}>
                    <div
                      style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '14em',
                      }}>
                      <img
                        style={{
                          marginTop: '10px',
                          marginLeft: '8px',
                          width: '12em',
                        }}
                        src="/appbuilder.svg"
                      />
                    </div>
                  </div>
                  <SideBarContent />
                </SwipeableDrawer>
              </>
            ) : (
              ''
            )}
            <Link href="/">
              {matches ? (
                <img
                  style={{
                    width: '2em',
                  }}
                  src="/appbuilderSm.svg"
                />
              ) : (
                <img
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '11em',
                  }}
                  src="/appbuilder.svg"
                />
              )}
            </Link>
            {!matches ? (
              <>
                <NavButton route="/" text="Home" />
                <NavButton route="/console" text="Console" />
                <NavButton route="/docs" text="Docs" />
              </>
            ) : (
              ''
            )}
          </div>
          <div className={classes.rightSection}>
            <Button
              href="https://join.slack.com/t/agoraiodev/shared_invite/zt-e7ln476c-pfWWYMs40Y7GMPz2i26pwA"
              target="_blank"
              variant="outlined"
              className={classes.rightButton}
              color="primary"
              disableElevation>
              {matches ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.05962 15.1722C5.05962 16.5671 3.93312 17.6945 2.53933 17.6945C1.14553 17.6945 0.019043 16.5671 0.019043 15.1722C0.019043 13.7773 1.14553 12.6499 2.53933 12.6499H5.05962V15.1722Z"
                    fill="#E01E5A"
                  />
                  <path
                    d="M6.31982 15.1722C6.31982 13.7773 7.44632 12.6499 8.84011 12.6499C10.2339 12.6499 11.3604 13.7773 11.3604 15.1722V21.4779C11.3604 22.8728 10.2339 24.0002 8.84011 24.0002C7.44632 24.0002 6.31982 22.8728 6.31982 21.4779V15.1722Z"
                    fill="#E01E5A"
                  />
                  <path
                    d="M8.84011 5.04458C7.44632 5.04458 6.31982 3.91719 6.31982 2.52229C6.31982 1.12739 7.44632 0 8.84011 0C10.2339 0 11.3604 1.12739 11.3604 2.52229V5.04458H8.84011Z"
                    fill="#36C5F0"
                  />
                  <path
                    d="M8.8401 6.32471C10.2339 6.32471 11.3604 7.45209 11.3604 8.847C11.3604 10.2419 10.2339 11.3693 8.8401 11.3693H2.52029C1.12649 11.3693 0 10.2419 0 8.847C0 7.45209 1.12649 6.32471 2.52029 6.32471H8.8401Z"
                    fill="#36C5F0"
                  />
                  <path
                    d="M18.9404 8.847C18.9404 7.45209 20.0669 6.32471 21.4607 6.32471C22.8545 6.32471 23.981 7.45209 23.981 8.847C23.981 10.2419 22.8545 11.3693 21.4607 11.3693H18.9404V8.847Z"
                    fill="#2EB67D"
                  />
                  <path
                    d="M17.6802 8.84712C17.6802 10.242 16.5537 11.3694 15.1599 11.3694C13.7661 11.3694 12.6396 10.242 12.6396 8.84712V2.52229C12.6396 1.12739 13.7661 0 15.1599 0C16.5537 0 17.6802 1.12739 17.6802 2.52229V8.84712Z"
                    fill="#2EB67D"
                  />
                  <path
                    d="M15.1599 18.9556C16.5537 18.9556 17.6802 20.083 17.6802 21.4779C17.6802 22.8728 16.5537 24.0001 15.1599 24.0001C13.7661 24.0001 12.6396 22.8728 12.6396 21.4779V18.9556H15.1599Z"
                    fill="#ECB22E"
                  />
                  <path
                    d="M15.1599 17.6945C13.7661 17.6945 12.6396 16.5671 12.6396 15.1722C12.6396 13.7773 13.7661 12.6499 15.1599 12.6499H21.4797C22.8735 12.6499 24 13.7773 24 15.1722C24 16.5671 22.8735 17.6945 21.4797 17.6945H15.1599Z"
                    fill="#ECB22E"
                  />
                </svg>
              ) : (
                'Get support'
              )}
            </Button>
          </div>
        </Container>
      </Paper>
    </>
  );
}

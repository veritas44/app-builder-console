import React, {useState, useRef, useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Button, IconButton, Paper} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useRouter} from 'next/router';
import useDrawerToggle from '../hooks/drawerToggle';
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
  const matches = useSmQuerry();
  const [isSticky, setSticky] = useState(false);
  const [leftDrawerToggle, setLeftDrawerToggle] = useDrawerToggle(false);
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
          {
            matches?
          <IconButton onClick={() => leftDrawerVisible(!leftDrawerVisible)}>
          <MenuIcon color="primary" />
          </IconButton>:""
          }
            <Link href="/">
              {matches ? (
                <img
                  style={{
                    width: '3em',
                  }}
                  src="/appbuilderSm.png"
                />
              ) : (
                <img
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '12em',
                  }}
                  src="/appbuilder.png"
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
              Get support
            </Button>
          </div>
        </Container>
      </Paper>
    </>
  );
}

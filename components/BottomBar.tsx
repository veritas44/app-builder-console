import React, {useState, useRef, useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Link from './Link';
import {useRouter} from 'next/router';
import Container from '@material-ui/core/Container';
import type {LinkProps} from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: '0',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    leftSection: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      alignSelf: 'center',
      alignItems: 'center',
    },
    appBar: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100vw',
      zIndex: 25,
    },
    navButton: {
      flex: 1,
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

export default function ButtonAppBar() {
  const [isSticky, setSticky] = useState(false);
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
            <NavButton route="/" text="Home" />
            <NavButton route="/console" text="Console" />
            <NavButton route="/docs" text="Docs" />
          </div>
        </Container>
      </Paper>
    </>
  );
}

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Link from './Link';
import {useRouter} from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(() =>
  createStyles({
    BottomNavigationBar: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100vw',
      zIndex: 25,
    },
  }),
);

export default function BottomNavigationBar() {
  const router = useRouter();
  const classes = useStyles();
  var value =
    router.pathname.split('/')[1] === ''
      ? 0
      : router.pathname.split('/')[1] == 'console'
      ? 1
      : router.pathname.split('/')[1] == 'docs'
      ? 2
      : null;

  return (
    <BottomNavigation
      showLabels
      className={classes.BottomNavigationBar}
      value={value}>
      <Link href="/" style={{flex: 1}}>
        <BottomNavigationAction
          showLabel
          label="Home"
          icon={<HomeIcon />}
          className={value == 0 ? 'Mui-selected' : ''}
        />
      </Link>
      <Link href="/console" style={{flex: 1}}>
        <BottomNavigationAction
          showLabel
          label="Console"
          icon={<CreateIcon />}
          className={value == 1 ? 'Mui-selected' : ''}
        />
      </Link>
      <Link href="/docs" style={{flex: 1}}>
        <BottomNavigationAction
          showLabel
          label="Docs"
          icon={<DescriptionIcon />}
          className={value == 2 ? 'Mui-selected' : ''}
        />
      </Link>
    </BottomNavigation>
  );
}

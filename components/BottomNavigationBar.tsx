import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
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
      justifyContent: 'space-evenly',
    },
  }),
);

export default function BottomNavigationBar() {
  const router = useRouter();
  const classes = useStyles();
  var value =
    router.pathname.split('/')[1] === 'console'
      ? '/builder'
      : router.pathname.split('/')[1] === 'docs'
      ? '/docs'
      : '/';

  return (
    <BottomNavigation
      showLabels
      className={classes.BottomNavigationBar}
      onChange={(_event: object, val: any) => router.push(val)}
      value={value}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} value={'/'} />
      <BottomNavigationAction
        label="Console"
        icon={<CreateIcon />}
        value={'/builder'}
      />
      <BottomNavigationAction
        label="Docs"
        icon={<DescriptionIcon />}
        value={'/docs'}
      />
    </BottomNavigation>
  );
}

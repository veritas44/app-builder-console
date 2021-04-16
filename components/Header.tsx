import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from './Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
    leftSection: {
      flex: 1,
      display: 'flex',
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <div className={classes.leftSection}>
            <Link href="/">
              <Typography variant="h6" className={classes.title}>
                Agora app builder
              </Typography>
            </Link>
            <Link href="/docs">
              <Button color="inherit">Docs</Button>
            </Link>
          </div>
          <Link prefetch href="/console">
            <Button color="inherit">Console</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

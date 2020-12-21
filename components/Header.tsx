import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
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
    <Container className={classes.root}>
      <Link href="/">
        <img
          style={{
            width: 100,
            height: 35,
            marginTop: 32,
          }}
          src="/logo.png"
        />
      </Link>

      <a target="_blank" href="https://sso.agora.io/v2/signup">
        <Button
          style={{
            color: '#fff',
            top: 32,
            float: 'right',
          }}
          variant="contained"
          color="primary"
          disableElevation>
          Sign up
        </Button>
      </a>
      <a
        target="_blank"
        href="https://join.slack.com/t/agoraiodev/shared_invite/zt-e7ln476c-pfWWYMs40Y7GMPz2i26pwA">
        <Button
          style={{
            top: 32,
            marginRight: 16,
            float: 'right',
          }}
          variant="outlined"
          color="primary"
          disableElevation>
          Get support
        </Button>
      </a>
    </Container>
  );
}

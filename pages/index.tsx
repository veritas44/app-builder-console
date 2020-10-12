import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
// import Header from '../components/Header';
import {Button} from '@material-ui/core';

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <div
        style={{
          position: 'absolute',
          opacity: 0.5,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: "url('./bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <Container style={{width: '100vw', height: '100vh'}}>
        <img
          style={{
            width: 100,
            height: 35,
            marginTop: 32,
          }}
          src="/logo.png"
        />
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
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '80%',
          }}>
          <Box style={{flex: 1, height: '100%'}}>
            <Typography
              variant="h2"
              component="h1"
              style={{marginTop: '20%', fontWeight: 500}}
              color="primary">
              RTE App Builder (Beta)
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{marginTop: 24, marginBottom: 64, fontWeight: 400}}
              color="primary">
              The Real-Time Engagement Platform for meaningful human
              connections.
            </Typography>
            <Link href="/console" color="secondary">
              <Button
                style={{color: '#fff', marginRight: 16, marginTop: 10}}
                variant="contained"
                color="primary"
                onClick={() => {}}
                disableElevation>
                Create new app
              </Button>
            </Link>
            <Button
              style={{marginTop: 10}}
              target="_blank"
              href="https://github.com/AgoraIO-Community/app-builder-core"
              variant="outlined"
              color="primary"
              onClick={() => {}}
              disableElevation>
              Visit the Docs
            </Button>
          </Box>
          <Box
            style={{
              flex: 1,
              display: 'flex',
              backgroundImage: "url('./illustration.svg')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              marginTop: '24px',
            }}
          />
          {/* <ProTip /> */}
        </Box>
        <Copyright />
      </Container>
    </>
  );
}

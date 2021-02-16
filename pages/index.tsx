import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import useSmQuerry from '../hooks/useSmQuerry';
import {Button} from '@material-ui/core';

export default function Index() {
  const matches = useSmQuerry();
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
      }}>
      <div
        style={{
          position: 'absolute',
          opacity: 0.5,
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundImage: "url('./bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <Container
        style={{
          width: '100%',
          flexGrow: 1,
        }}>
        <Box
          style={
            matches
              ? {
                  display: 'flex',
                  flexDirection: 'column-reverse',
                  width: '100%',
                  height: '80%',
                }
              : {
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  height: '80%',
                }
          }>
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
              style={
                matches
                  ? {marginTop: 24, marginBottom: 24, fontWeight: 400}
                  : {marginTop: 24, marginBottom: 64, fontWeight: 400}
              }
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
            <Link href="/docs" color="secondary">
              <Button
                style={{marginTop: 10}}
                variant="outlined"
                color="primary"
                onClick={() => {}}
                disableElevation>
                Visit the Docs
              </Button>
            </Link>
          </Box>
          <Box
            style={
              matches
                ? {
                    flex: 1,
                    display: 'flex',
                    backgroundImage: "url('./illustration.svg')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    marginTop: '120px',
                    minHeight: '280px',
                  }
                : {
                    flex: 2,
                    display: 'flex',
                    backgroundImage: "url('./illustration.svg')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    marginTop: '24px',
                  }
            }
          />
          {/* <ProTip /> */}
        </Box>
        <Copyright />
      </Container>
    </div>
  );
}

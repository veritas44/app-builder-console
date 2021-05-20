import React from 'react';
import {
  Toolbar,
  Box,
  Avatar,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import {createStyles, makeStyles} from '@material-ui/core/styles';
const useNavStyles = makeStyles(() =>
  createStyles({
    AppBar: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
    Logo: {
      height: '25px',
      marginRight: 'auto',
    },
    Avatar: {
      width: '30px',
      height: '30px',
      background: '#DEE5EF',
      marginLeft: 'auto',
    },
    Name: {
      color: 'black',
    },
  }),
);
const useContainerStyles = makeStyles(() =>
  createStyles({
    button: {
      borderRadius: '50px',
      color: '#fff',
      padding: '15px 27px',
      textTransform: 'unset',
    },
    oneContainer: {
      maxHeight: '517px',
      backgroundColor: '#099DFD',
      color: '#fff',
    },
    oneLeftContainer: {
      padding: '70px 0px 70px 206px',
    },
    oneRightContainer: {
      padding: '124px 67px 1px 0px',
    },
    seeHowItBtn: {
      backgroundColor: 'transparent',
      padding: '15px 27px',
    },
    twoContainer: {
      maxHeight: '403px',
      backgroundColor: '#E0EDFF',
      color: '#4D4D4D',
      paddingTop: '51px',
      paddingBottom: '51px',
    },
    twoLeftContainer: {},
    twoRightContainer: {
      paddingRight: '206px',
    },
    tabMenuContainer: {},
    featureContainer: {},
    featureLeftContainer: {},
    featureRightContainer: {},
  }),
);
function Home() {
  const NavbarClasses = useNavStyles();
  const ContainerClasses = useContainerStyles();
  return (
    <div>
      <Box position="static" color="white">
        <Toolbar className={NavbarClasses.AppBar}>
          <Box display="flex" alignItems="center">
            <img width="40px" src="./logo.svg" />
            <Box>
              <Box
                color="black"
                fontSize="larger"
                fontWeight="600"
                lineHeight="1.1">
                Agora
              </Box>
              <Box
                color="black"
                fontSize="larger"
                fontWeight="600"
                lineHeight="1.1">
                App Builder
              </Box>
            </Box>
          </Box>
          <Avatar className={NavbarClasses.Avatar} />
          <Box mx={7}>
            <Typography
              variant="body1"
              component="h3"
              className={NavbarClasses.Name}>
              Name
            </Typography>
          </Box>
        </Toolbar>
      </Box>
      <Grid container className={ContainerClasses.oneContainer}>
        <Grid item xs={6} className={ContainerClasses.oneLeftContainer}>
          <h1>
            Name: Agora App Builder for Customized Video Apps. No coding
            required
          </h1>
          <h2>
            EXPORT 495x72 Name: Zoom past your competitors stuck in the video
            conferencing rut. Build highly-customizable video and real-time
            engagement applications in minutes
          </h2>
          <Box display="flex">
            <Button
              style={{backgroundColor: 'black'}}
              className={ContainerClasses.button}>
              Try it Now
            </Button>
            <Box>
              <Button className={ContainerClasses.seeHowItBtn}>
                See How it works
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} className={ContainerClasses.oneRightContainer}></Grid>
      </Grid>
      <Grid container className={ContainerClasses.twoContainer}>
        <Grid item xs={6} className={ContainerClasses.twoLeftContainer}></Grid>
        <Grid item xs={6} className={ContainerClasses.twoRightContainer}>
          <h1>One-size-fits-all video conferencing is over</h1>
          <h2>
            With the Agora App Builder, companies and creators can personalize
            and publish their very own, purpose-built, live video products to
            connect with audiences, engage with customers and drive business
            outcomes.
          </h2>
        </Grid>
      </Grid>
      <Box textAlign="center" mt={47}>
        <Box style={{maxWidth: '620px'}} margin="auto">
          <h1>
            You don’t have to be a programmer to create your very own,
            purpose-built, interactive streaming app.
          </h1>
        </Box>
      </Box>
      <Box textAlign="left" mt={47}>
        <Box style={{maxWidth: '620px'}} textAlign="center" margin="auto">
          <h1>Features</h1>
          <h2>
            Enhance user experiences in your applications with high-quality,
            interactive chat.
          </h2>
        </Box>
        <Box mt={25}>
          <Grid container className={ContainerClasses.featureContainer}>
            <Grid item xs={6} className={ContainerClasses.featureLeftContainer}>
              <Box pl={103}>
                <h1>Beautiful - right out of the box</h1>
                <h2>
                  Building an attractive, customized video chat app is faster
                  than ever with ready-to-use Agora App Builder templates
                  containing modern color palettes, stylish layouts and fresh
                  graphics.
                </h2>
                <h1>Default themes</h1>
                <h2>
                  Get started immediately with the provided themes or design
                  your own.
                </h2>
                <h1>Stock images </h1>
                <h2>
                  Select from a generous library of free stock photos and
                  graphics.
                </h2>
                <h1>Responsive design</h1>
                <h2>
                  Ensure an optimal experience for all users regardless of
                  device
                </h2>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              className={ContainerClasses.featureRightContainer}></Grid>
          </Grid>
        </Box>
        <Box mt={25}>
          <Grid container className={ContainerClasses.featureContainer}>
            <Grid
              item
              xs={6}
              className={ContainerClasses.featureLeftContainer}></Grid>
            <Grid
              item
              xs={6}
              className={ContainerClasses.featureRightContainer}>
              <Box pr={103}>
                <h1>No code, low code, your code</h1>
                <h2>
                  Our easy, step-by-step visual designer can help you create the
                  perfect product without any code. If you’re a developer
                  looking for more customization and control, download the
                  source code, then continue to add new features and tailored
                  experiences for your users.
                </h2>
                <h1>Customization to the core</h1>
                <h2>
                  Quickly evaluate each interface change as you set up your app
                  against your functional and aesthetic requirements, creating a
                  product that perfectly suits your customers’ needs.
                </h2>
                <h1>Build once, deploy six times</h1>
                <h2>
                  Quickly publish your app for users on any device or operating
                  system including desktop, web and mobile.
                </h2>
                <h1>Scale beyond peer-to-peer</h1>
                <h2>
                  Define your use case—from one-to-one or broadcast to
                  thousands—and the technology will scale to ensure a quality
                  user experience.
                </h2>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={25}>
          <Grid container className={ContainerClasses.featureContainer}>
            <Grid item xs={6} className={ContainerClasses.featureLeftContainer}>
              <Box pl={103}>
                <h1>Only good surprises</h1>
                <h2>
                  Users have come to demand the highest quality features and
                  reliability during video meetings. Apps built with the Agora
                  App Builder deliver all the features you’ve come to expect—and
                  even some surprises!
                </h2>
                <h1>Multi-screen sharing</h1>
                <h2>
                  Enable screen sharing to facilitate deeper insights and
                  collaboration between users.
                </h2>
                <h1>Dial-in support</h1>
                <h2>
                  Provide dial-in capability through TurboBridge for users who
                  are offline ensuring everyone who needs to attend can attend.
                </h2>
                <h1>Host controls</h1>
                <h2>
                  Prepare hosts before going live, then give them the mic to
                  connect directly with the audience for an engaging,
                  interactive discussion.
                </h2>
                <h1>Cloud recording</h1>
                <h2>
                  Record live audio and video experiences to increase the
                  lifetime of your content or to archive for safety, monitoring,
                  and compliance reviews.
                </h2>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              className={ContainerClasses.featureRightContainer}></Grid>
          </Grid>
        </Box>
      </Box>
      <Box mt={10} mb={20} textAlign="center">
        <Box margin="auto">
          <Button
            style={{backgroundColor: '#00AEFC'}}
            className={ContainerClasses.button}>
            Launch your product today
          </Button>
        </Box>
      </Box>
      <Box
        textAlign="center"
        style={{backgroundColor: '#E0EDFF'}}
        pt={25}
        pb={25}>
        <Box style={{maxWidth: '620px'}} margin="auto">
          <Box fontSize="32px">
            <span>Pricing that scales with your business</span>
          </Box>
          <h2>Get 10,000 minutes FREE every month</h2>
          <Button
            style={{backgroundColor: '#00AEFC'}}
            className={ContainerClasses.button}>
            Get Started
          </Button>
        </Box>
      </Box>
      <Box style={{backgroundColor: '#021048'}} pt={25} pb={25} pl={70} pr={70}>
        <Grid container>
          <Grid item xs={3}>
            <Box color="#fff">
              <h1>
                Let's <b>start working together</b>
              </h1>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <Box color="#fff" style={{border:"1px solid #fff"}} borderRadius="10px" p={5} pl={15} pr={15}>
                    <h2>Talk to us today.</h2>
                    <h3>Whether you have question about Agora technology, development, pricing or patnerships, we're here to help </h3>
                    <h3>Conntect our Experts {'>>'}</h3>
                </Box>
              </Grid>
              <Grid item xs={6}>
              <Box color="#fff" style={{border:"1px solid #fff"}} borderRadius="10px" p={5} pl={15} pr={15}>
                    <h2>Talk to us today.</h2>
                    <h3>Whether you have question about Agora technology, development, pricing or patnerships, we're here to help </h3>
                    <h3>Conntect our Experts {'>>'}</h3>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;

import React from 'react';
import {
  Toolbar,
  Theme,
  Box,
  Grid,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Tabs,
  Tab,
  Typography,
  Select,
  InputBase
} from '@material-ui/core';
import {useRouter} from 'next/router';
import {createStyles, makeStyles,withStyles} from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useNavStyles = makeStyles((theme: Theme) =>
  createStyles({
    AppBar: {
      paddingLeft: '13%',
      paddingRight: '40px',
      backgroundColor:"black",
    },
    Logo: {
      height: '25px',
      marginRight: 'auto',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    button: {
      margin: '0px 10px 0px 10px',
      padding: '10px 30px 10px 30px',
      borderRadius: '50px',
      textTransform: 'unset',
    },
  }),
);
const useContainerStyles = makeStyles(() =>
  createStyles({
    font32: {
      fontSize: '32px',
      ['@media (max-width:900px)']: {
        fontSize: '28px',
      },
    },
    font21: {
      fontSize: '21px',
      ['@media (max-width:900px)']: {
        fontSize: '17px',
      },
    },
    font28: {
      fontSize: '28px',
      ['@media (max-width:900px)']: {
        fontSize: '24px',
      },
    },
    font16: {
      fontSize: '16px',
      ['@media (max-width:900px)']: {
        fontSize: '12px',
      },
    },
    font18: {
      fontSize: '18px',
      ['@media (max-width:900px)']: {
        fontSize: '14px',
      },
    },
    button: {
      borderRadius: '50px',
      color: '#fff',
      padding: '15px 27px',
      textTransform: 'unset',
      whiteSpace: 'nowrap',
    },
    tabClass:{
      ['@media (max-width:600px)']: {
        display:"none"
      },
    },
    selectClass:{
      width:"calc(100% - 30px)",
      display:"none",
      textAlign:"left",
      boxShadow: "#06489b8a 8px 31px 59px -7px",
      ['@media (max-width:600px)']: {
        display:"block"
      },
    },
    extraSpacingLeft: {
      paddingLeft: '13% !important',
      ['@media (max-width:900px)']: {
        paddingLeft: '60px !important',
        paddingRight: '60px !important',
      },
    },
    exextraSpacingRight: {
      paddingRight: '13% !important',
      ['@media (max-width:900px)']: {
        paddingRight: '60px !important',
        paddingLeft: '60px !important',
      },
    },
    oneContainer: {
      backgroundColor: '#099DFD',
      backgroundImage: 'linear-gradient(to right,#052F7F,transparent)',
      color: '#fff',
      paddingTop: '120px',
    },
    oneContainerButton:{
      display:"flex",
      ['@media (max-width:700px)']: {
        display:"block",
      },
    },
    seeHowItBtn: {
      color:"#fff",
      textDecoration:"underline",
      backgroundColor: 'transparent',
      padding: '15px 27px',
      whiteSpace: 'nowrap',
      textTransform:"unset"
    },
    ConferencingContainer: {
      backgroundColor: '#E0EDFF',
      color: '#212121',
      paddingTop: '51px',
      paddingBottom: '51px',
    },
    ConferencingLeftContainer: {
      ['@media (max-width:600px)']: {
        marginBottom: '40px',
      },
    },
    ConferencingImg2: {
      maxWidth: '50%',
      height: 'fit-content',
      maxHeight: '300px',
      marginTop: 'auto',
      marginBottom: 'auto',
      ['@media (max-width:900px)']: {
        maxWidth: '60%',
      },
    },
    ConferencingImg1: {
      maxWidth: '50%',
      marginRight: '40px',
      height: 'fit-content',
      maxHeight: '250px',
      marginTop: 'auto',
      marginBottom: 'auto',
      ['@media (max-width:900px)']: {
        maxHeight: '200px',
      },
      ['@media (max-width:700px)']: {
        maxHeight: '150px',
      },
    },
    heightCenter: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    textCenter: {
      maxWidth: '770px',
      paddingLeft: '60px',
      paddingRight: '60px',
      color: '#212121',
    },
    blueFooter: {
      padding: '25px 120px 25px 120px',
      ['@media (max-width:900px)']: {
        padding: '25px 60px 25px 60px',
      },
    },
    blueFooterFlexbox: {
      padding: '15px 30px 15px 30px',
      border: '1px solid #fff',
      ['@media (max-width:599px)']: {
        marginTop: '20px',
      },
    },
    reverseDerection: {
      ['@media (max-width:599px)']: {
        flexDirection: 'column-reverse',
      },
    },
    agoraImg: {
      marginBottom: '-5px',
      marginLeft: '60px',
      marginRight: '60px',
      width: 'calc(100% - 120px)',
    },
  }),
);
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function TabPanel(props: any) {
  let {children, value, index, padding, ...other} = props;
  padding === undefined ? (padding = 2) : {};
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={padding}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function Home() {
  const router = useRouter();
  const NavbarClasses = useNavStyles();
  const ContainerClasses = useContainerStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <div>
      <Box position="static" color="white">
        <Toolbar className={NavbarClasses.AppBar}>
          <Box display="flex" alignItems="center">
            <img width="130px" src="./splashAssets/logo.png" />
          </Box>
          <Box mx={7}  color="#fff" className={NavbarClasses.sectionDesktop} ml="auto">
            <Button style={{color:"#fff"}} className={NavbarClasses.button}>Agora.io</Button>
            <Button style={{color:"#fff"}} className={NavbarClasses.button}>Docs</Button>
            <Button style={{color:"#fff"}}className={NavbarClasses.button}>Get Support</Button>
            <Button
              className={NavbarClasses.button}
              onClick={()=>{router.push('/create')}}
              style={{border: '1px solid #00AEFC',color:"#fff"}}>
              Try it Now
            </Button>
          </Box>
          <Box mx={7} className={NavbarClasses.sectionMobile} ml="auto"  color="#fff">
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                  width: '25ch',
                },
              }}>
              <MenuItem>
                <Box className={NavbarClasses.button}>Agora.io</Box>
              </MenuItem>
              <MenuItem>
                <Box className={NavbarClasses.button}>Docs</Box>
              </MenuItem>
              <MenuItem>
                <Box className={NavbarClasses.button}>Get Support</Box>
              </MenuItem>
              <MenuItem>
                <Box
                  onClick={()=>{router.push('/create')}}
                  className={NavbarClasses.button}
                  style={{border: '1px solid #00AEFC'}}>
                  Try it Now
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
      <Grid container className={ContainerClasses.oneContainer}>
        <Grid
          item
          sm={6}
          xs={12}
          style={{marginBottom:"50px"}}
          className={`${ContainerClasses.extraSpacingLeft}`}>
          <Box>
            <Box className={`${ContainerClasses.font32}`}>
              <b>
                Agora App Builder for Customized Video Apps. No coding required.
              </b>
            </Box>
            <br />
            <Box className={`${ContainerClasses.font21}`}>
              Zoom past your competitors stuck in the video conferencing rut.
              Build highly-customizable video and real-time engagement
              applications in minutes.
            </Box>
          </Box>
          <br />
          <Box className={ContainerClasses.oneContainerButton}>
            <Button
              style={{backgroundColor: 'black'}}
              className={ContainerClasses.button}
              onClick={()=>{router.push('/create')}}>
              Try it Now
            </Button>
            <Box>
              <Button className={ContainerClasses.seeHowItBtn}>
                See How it works
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12} className={ContainerClasses.heightCenter}>
          <img
            className={ContainerClasses.agoraImg}
            src="./splashAssets/agoraConsole.png"
          />
        </Grid>
      </Grid>
      <Grid container className={ContainerClasses.ConferencingContainer}>
        <Grid
          item
          sm={6}
          xs={12}
          className={ContainerClasses.ConferencingLeftContainer}>
          <Box
            display="flex"
            justifyContent="flex-end"
            marginLeft="auto"
            marginRight="60px"
            width="fit-content">
            <img
              className={ContainerClasses.ConferencingImg1}
              src="./splashAssets/timeline.png"
            />
            <img
              className={ContainerClasses.ConferencingImg2}
              src="./splashAssets/conferencing1.png"
              style={{}}
            />
          </Box>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          className={`${ContainerClasses.heightCenter} ${ContainerClasses.exextraSpacingRight}`}>
          <Box className={`${ContainerClasses.font28}`}>
            One-size-fits-all video <br /> conferencing is over.
          </Box>
          <br />
          <Box className={`${ContainerClasses.font16}`}>
            With the Agora App Builder, companies and creators can personalize
            and publish their very own, purpose-built, live video products to
            connect with audiences, engage with customers and drive business
            outcomes.
          </Box>
        </Grid>
      </Grid>
      <Box textAlign="center" color="#212121">
        <Box
          mt={40}
          mb={25}
          className={`${ContainerClasses.font28} ${ContainerClasses.textCenter}`}
          margin="auto">
          You don’t have to be a programmer to create your very own,
          purpose-built, interactive streaming app.
        </Box>
        <Box
          className={`${ContainerClasses.exextraSpacingRight} ${ContainerClasses.extraSpacingLeft}`}>
          <Tabs
            className={ContainerClasses.tabClass}
            onChange={handleTabChange}
            value={tabValue}
            indicatorColor="primary"
            centered
            aria-label="nav-example">
            <Tab label="Video Meetings" {...a11yProps(0)} />
            <Tab label="Online Education" {...a11yProps(1)} />
            <Tab label="Live Podcast" {...a11yProps(2)} />
            <Tab label="Watch Parties" {...a11yProps(3)} />
          </Tabs>
          <Select value={tabValue}
          input={<BootstrapInput />}
          className={ContainerClasses.selectClass}
          onChange={(event:any) => {
            setTabValue(event.target.value);}}>
            <MenuItem value={0}>Video Meetings</MenuItem>
            <MenuItem value={1}>Online Education</MenuItem>
            <MenuItem value={2}>Live Podcast</MenuItem>
            <MenuItem value={3}>Watch Parties</MenuItem>
          </Select>
          <TabPanel value={tabValue} index={0}>
            <Box mt={10} mb={10}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Box width="fit-content" marginRight="60px" marginLeft="auto">
                    <img src='./splashAssets/videomeetings.png' />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={ContainerClasses.heightCenter}>
                  <Box className={ContainerClasses.font16} textAlign="left">
                  Put your brand front-and-center in every video conference experience. Producing a custom app with the features you expect for online meetings is quick and easy using Agora App Builder. With beautiful templates and a generous library of images, you can create and customize your branded video chat/meeting solution without programming knowledge. If you have more experienced skills available, App Builder is a fast way to get a custom video solution started, then customize more using extensive APIs.
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
          <Box mt={10} mb={10}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Box width="fit-content" marginRight="60px" marginLeft="auto">
                    <img src='./splashAssets/videomeetings.png' />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={ContainerClasses.heightCenter}>
                  <Box className={ContainerClasses.font16} textAlign="left">
                    Your course, your brand. With Agora App Builder Education Template your live-online training course will have all the features your students and faculty need for success. Unlike other video meeting solutions, Agora App Builder includes Persistent Classroom, a virtual space where all the notes and discussions will remain for reference when the class meets again. Perfect for immersive, skill-building boot camps, professional certifications and licenses, university certificates, industry or employer-backed programs and more, Agora App Builder is the quick and easy way to quickly deliver a robust, branded, online education platform.
                    <br/>
                    Coming Soon Q3 2021
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
          <Box mt={10} mb={10}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Box width="fit-content" marginRight="60px" marginLeft="auto">
                    <img src='./splashAssets/livepodcast.png' />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={ContainerClasses.heightCenter}>
                  <Box className={ContainerClasses.font16} textAlign="left">
                  Livecasting is perfect for the live podcast channel or social influencer to build excitement around trending topics and new products with live demonstrations, announcements, or celebrations. Your app will easily manage conversations with built-in host controls, then broadcast out to audiences with crystal-clear audio and video. Regardless of how many join the stream, our advanced algorithms manage scaling for you, delivering personalized experiences that can reach small, niche audiences or connect with thousands around the world.
                  <br/>
                  Coming Soon Q3 2021
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
          <Box mt={10} mb={10}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Box width="fit-content" marginRight="60px" marginLeft="auto">
                    <img width="100%" src='./splashAssets/watchparties.png' />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={ContainerClasses.heightCenter}>
                  <Box className={ContainerClasses.font16} textAlign="left">
                  Distant friends and family enjoy watching movies and TV shows together using interactive video chat to share all the highs, lows, and favorite punchlines. Using Agora App Builder and its library of available templates, your team can rapidly deploy a no-code concept, then fully customize the features and interface using the extensive API set to deliver a beautifully customized interactive streaming app with amazing audio/video quality delivered to any device around the world.
                  <br/>
                  Coming Soon Q4 2021
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </Box>
      </Box>
      <Box textAlign="left" mt={40} color="#212121">
        <Box
          mt={40}
          className={`${ContainerClasses.font28} ${ContainerClasses.textCenter}`}
          margin="auto"
          textAlign="center">
          Features
        </Box>
        <Box
          mt={10}
          mb={25}
          style={{maxWidth: '525px'}}
          className={`${ContainerClasses.font16} ${ContainerClasses.textCenter}`}
          margin="auto"
          textAlign="center">
          Enhance user experiences in your applications with high-quality,
          interactive chat.
        </Box>
        <Box mt={25}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              className={`${ContainerClasses.extraSpacingLeft} ${ContainerClasses.heightCenter}`}>
              <Box className={`${ContainerClasses.font18}`}>
                <b>Beautiful - right out of the box</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Building an attractive, customized video chat app is faster than
                ever with ready-to-use Agora App Builder templates containing
                modern color palettes, stylish layouts and fresh graphics.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Default themes</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Get started immediately with the provided themes or design your
                own.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Stock images</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Select from a generous library of free stock photos and
                graphics.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Responsive design</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Ensure an optimal experience for all users regardless of device
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={`${ContainerClasses.heightCenter}`}>
              <Box width="100%" pl={30}>
                <img width="100%" src="./splashAssets/feature1.png" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={25}>
          <Grid container className={ContainerClasses.reverseDerection}>
            <Grid item xs={12} sm={6} className={ContainerClasses.heightCenter}>
              <Box width="100%" pr={30}>
                <img width="100%" src="./splashAssets/feature2.png" />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className={`${ContainerClasses.exextraSpacingRight} ${ContainerClasses.heightCenter}`}>
              <Box className={`${ContainerClasses.font18}`}>
                <b>No code, low code, your code</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Our easy, step-by-step visual designer can help you create the
                perfect product without any code. If you’re a developer looking
                for more customization and control, download the source code,
                then continue to add new features and tailored experiences for
                your users.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Customization to the core</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Quickly evaluate each interface change as you set up your app
                against your functional and aesthetic requirements, creating a
                product that perfectly suits your customers’ needs.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Build once, deploy six times</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Quickly publish your app for users on any device or operating
                system including desktop, web and mobile.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Scale beyond peer-to-peer</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Define your use case—from one-to-one or broadcast to
                thousands—and the technology will scale to ensure a quality user
                experience.
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={25}>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              className={`${ContainerClasses.extraSpacingLeft} ${ContainerClasses.heightCenter}`}>
              <Box className={`${ContainerClasses.font18}`}>
                <b>Only good surprises</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Users have come to demand the highest quality features and
                reliability during video meetings. Apps built with the Agora App
                Builder deliver all the features you’ve come to expect—and even
                some surprises!
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Multi-screen sharing</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Enable screen sharing to facilitate deeper insights and
                collaboration between users.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Dial-in support</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Provide dial-in capability through TurboBridge for users who are
                offline ensuring everyone who needs to attend can attend.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Host controls</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Prepare hosts before going live, then give them the mic to
                connect directly with the audience for an engaging, interactive
                discussion.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Cloud recording</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Record live audio and video experiences to increase the lifetime
                of your content or to archive for safety, monitoring, and
                compliance reviews.
              </Box>
            </Grid>
            <Grid item sm={6} xs={12} className={ContainerClasses.heightCenter}>
              <Box width="100%" pl={30}>
                <img width="100%" src="./splashAssets/feature3.png" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box mt={20} mb={20} textAlign="center">
        <Box margin="auto">
          <Button
            style={{backgroundColor: '#00AEFC'}}
            className={ContainerClasses.button} onClick={()=>{router.push('/create')}}>
            
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
          <Box className={ContainerClasses.font32} fontWeight="500">
            Pricing that scales with your business
          </Box>
          <br />
          <Box className={ContainerClasses.font21} fontWeight="500">
            Get 10,000 minutes FREE every month
          </Box>
          <br />
          <Button
            style={{backgroundColor: '#00AEFC'}}
            className={ContainerClasses.button}
            onClick={()=>{router.push('/create')}}>
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        style={{backgroundColor: '#021048'}}
        className={ContainerClasses.blueFooter}>
        <Grid container>
          <Grid item sm={3} xs={12}>
            <Box
              color="#fff"
              className={ContainerClasses.font28}
              mr={20}
              pt={10}
              borderTop="2px solid #fff">
              Let's <b>start</b> working together
            </Box>
          </Grid>
          <Grid item sm={9} xs={12}>
            <Grid container spacing={10}>
              <Grid item sm={6} xs={12}>
                <Box
                  color="#fff"
                  className={ContainerClasses.blueFooterFlexbox}
                  style={{border: '1px solid #fff'}}
                  borderRadius="10px"
                  p={5}
                  pl={15}
                  pr={15}>
                  <Box className={ContainerClasses.font21}>
                    <b>Talk to us today.</b>
                  </Box>
                  <br />
                  <Box className={ContainerClasses.font16}>
                    Whether you have question about Agora technology,
                    development, pricing or patnerships, we're here to help{' '}
                  </Box>
                  <br />
                  <Box className={ContainerClasses.font16}>
                    Conntect our Experts {'>>'}
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box
                  color="#fff"
                  style={{border: '1px solid #fff'}}
                  borderRadius="10px"
                  className={ContainerClasses.blueFooterFlexbox}
                  p={5}
                  pl={15}
                  pr={15}>
                  <Box className={ContainerClasses.font21}>
                    <b>Sign up to start building</b>
                  </Box>
                  <br />
                  <Box className={ContainerClasses.font16}>
                    With 10,000 free minutes each month, you don't pay until
                    your business starts to scale. No credit card required.
                  </Box>
                  <br />
                  <Box className={ContainerClasses.font16}>
                    Get Started {'>>'}
                  </Box>
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

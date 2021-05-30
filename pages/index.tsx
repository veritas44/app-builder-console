import React from 'react';
import Link from '../components/Link';
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
  InputBase,
} from '@material-ui/core';
import {
  Copyright,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  GitHub,
  Facebook,
} from '@material-ui/icons';
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
const useNavStyles = makeStyles((theme: Theme) =>
  createStyles({
    AppBar: {
      paddingLeft: '13%',
      paddingRight: '40px',
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
      padding: '10px 20px 10px 20px',
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
    font13: {
      fontSize: '13px',
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
      textDecoration:"unset"
    },
    tabClass: {
      borderBottom: '2px solid #f8f8f8',
      ['@media (max-width:600px)']: {
        display: 'none',
      },
    },
    selectClass: {
      width: 'calc(100% - 30px)',
      display: 'none',
      textAlign: 'left',
      boxShadow: '#06489b8a 8px 31px 59px -7px',
      ['@media (max-width:600px)']: {
        display: 'block',
      },
    },
    selectInnerClass: {
      paddingRight: '0px !important',
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
      ['@media (max-width:600px)']: {
        marginTop:"20px !important"
      },
    },
    oneContainer: {
      backgroundColor: '#099DFD',
      backgroundImage: 'linear-gradient(to right,#052F7F,transparent)',
      color: '#fff',
      paddingTop: '120px',
      paddingBottom: '80px',
      ['@media (max-width:900px)']: {
        paddingTop: '60px',
        paddingBottom: '60px',
      },
    },
    oneContainerRight: {
      ['@media (max-width:600px)']: {
        display: 'none',
      },
    },
    oneContainerButton: {
      display: 'flex',
      ['@media (max-width:700px)']: {
        display: 'block',
      },
      ['@media (max-width:600px)']: {
        display: 'flex',
        zoom: 0.8,
      },
    },
    timelineLeft:{
        marginRight:"60px",
        ['@media (max-width:900px)']: {
          marginRight:"0px",
          marginLeft:"60px"
        },
        ['@media (max-width:600px)']: {
          margin:"auto",
          paddingRight: '60px !important',
          paddingLeft: '60px !important',
        },
    },
    seeHowItBtn: {
      color: '#fff',
      textDecoration: 'underline',
      backgroundColor: 'transparent',
      padding: '15px 27px',
      whiteSpace: 'nowrap',
      textTransform: 'unset',
      ['@media (max-width:700px)']: {
        padding: '15px 0px',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    tryItNow:{
      backgroundColor: 'black',
      '&:hover': {
        backgroundColor: '#fff',
        color:"#073788"
      },
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
      padding: '50px 80px 80px 80px',
      ['@media (max-width:900px)']: {
        padding: '25px 60px 25px 60px',
      },
    },
    blueFooterEnd: {
      padding: '30px 80px 30px 80px',
      ['@media (max-width:900px)']: {
        padding: '25px 60px 25px 60px',
      },
    },
    bredcumbFooter: {
      padding: '15px 80px 10px 80px',
      ['@media (max-width:900px)']: {
        padding: '15px 60px 10px 60px',
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
      marginLeft: '30px',
      width: 'calc(100% - 60px)',
    },
    cookieBox: {
      position: 'fixed',
      borderRadius: '10px',
      left: '20px',
      bottom: '20px',
      lineHeight: '1.6',
      maxWidth: '500px',
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
  const NavbarClasses = useNavStyles();
  const ContainerClasses = useContainerStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = React.useState(0);
  const [cookies, setCookies] = React.useState(false);
  const [navWhite,setNavWhite] = React.useState(false);
  const open = Boolean(anchorEl);
  React.useEffect(() => {
    if (!localStorage.getItem('cookies')) {
      setCookies(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll=()=>{
    const navBar:any = document.getElementById('AppBar')
    if(navBar){
      if (window.scrollY > 70) {
        setNavWhite(()=>true);
        navBar.style.backgroundColor="#fff"
      } else {
        setNavWhite(()=>false);
        navBar.style.backgroundColor="transparent"
      }
    }

  }
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
      <Box position="fixed" width="100%" zIndex={1}>
        <Toolbar className={NavbarClasses.AppBar} id="AppBar">
          <Box display="flex" alignItems="center">
            <img width="130px" src={`./splashAssets/${navWhite?"logo":"logowhite"}.png`}/>
          </Box>
          <Box
            mx={7}
            color="#fff"
            className={NavbarClasses.sectionDesktop}
            ml="auto">
            <Button
              className={NavbarClasses.button}
              onClick={() => window.open('https://www.agora.io/')}>
              <Box color={navWhite?"black":"white"}>Agora.io</Box>
            </Button>
            <Button
              className={NavbarClasses.button}
              onClick={() => window.open('https://www.google.com/')}>
              <Box color={navWhite?"black":"white"}>Docs</Box>
            </Button>
            <Button
              className={NavbarClasses.button}
              onClick={() => window.open('https://www.google.com/')}>
              <Box color={navWhite?"black":"white"}>Get Support</Box>
            </Button>
            <Link href="/create">
              <Button
                className={NavbarClasses.button}
                style={{border: '2px solid #00AEFC'}}>
                <Box color={navWhite?"black":"white"}>Try it Now</Box>
              </Button>
            </Link>
          </Box>
          <Box
            mx={7}
            className={NavbarClasses.sectionMobile}
            ml="auto"
            color="#fff">
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: '25ch',
                },
              }}>
              <MenuItem>
                <Box
                  className={NavbarClasses.button}
                  onClick={() => window.open('https://www.agora.io/')}>
                  Agora.io
                </Box>
              </MenuItem>
              <MenuItem>
                <Box
                  onClick={() => window.open('https://www.google.com/')}
                  className={NavbarClasses.button}>
                  Docs
                </Box>
              </MenuItem>
              <MenuItem>
                <Box
                  onClick={() => window.open('https://www.google.com/')}
                  className={NavbarClasses.button}>
                  Get Support
                </Box>
              </MenuItem>
              {/* <MenuItem>
                <Box
                  onClick={() => window.open('http://sso2.staging.agora.io/api/v0/oauth/authorize?scope=basic_info&response_type=code&redirect_uri=https://rocky-temple-79220.herokuapp.com/auth&client_id=7a8f4c3d28fa40f6b506a2725c2a81e8')}
                  className={NavbarClasses.button}>
                  Login
                </Box>
              </MenuItem> */}
              <MenuItem>
                <Link href="/create" style={{textDecoration:"none"}}>
                  <Box
                    className={NavbarClasses.button}
                    style={{border: '1px solid #00AEFC'}}>
                    Try it Now
                  </Box>
                </Link>
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
          style={{display: 'flex'}}
          className={`${ContainerClasses.extraSpacingLeft}`}>
          <Box className={ContainerClasses.heightCenter}>
            <Box>
              <Box className={`${ContainerClasses.font32}`}>
                <b>
                  Agora App Builder for Live Video Chat & Streaming Apps—No
                  Coding Required.
                </b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font21}`}>
                Zoom out of the video conferencing rut. Build branded video and
                real-time engagement applications in minutes.
              </Box>
            </Box>
            <br />
            <Box className={ContainerClasses.oneContainerButton}>
              <Link href="/create" style={{textDecoration:"none"}}>
                <Button
                  className={`${ContainerClasses.tryItNow} ${ContainerClasses.button}`}>
                  Try it Now
                </Button>
              </Link>
              <Box ml={5}>
                <Button
                  className={ContainerClasses.seeHowItBtn}
                  onClick={() => window.open('https://www.google.com/')}
                  disableElevation
                  disableRipple>
                  See How it works
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          className={`${ContainerClasses.heightCenter} ${ContainerClasses.oneContainerRight}`}>
          <img
            className={ContainerClasses.agoraImg}
            src="./splashAssets/agoraConsole.png"
          />
        </Grid>
      </Grid>
      <Grid container className={ContainerClasses.ConferencingContainer}>
        <Grid item xs={12} sm={6} className={ContainerClasses.heightCenter}>
          <Box width="fit-content" maxWidth="400px" marginLeft="auto" className={ContainerClasses.timelineLeft}>
            <img width="100%" src="./splashAssets/timeline.png" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className={`${ContainerClasses.exextraSpacingRight} ${ContainerClasses.heightCenter}`}>
          <Box className={`${ContainerClasses.font28}`}>
            One-size-fits-all video <br /> conferencing is over.
          </Box>
          <br />
          <Box className={`${ContainerClasses.font16}`}>
            With the Agora App Builder, you can personalize and publish your
            very own, purpose-built, live video apps to connect with audiences,
            engage with customers and drive business outcomes.
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
            <Tab
              label="Video Meetings"
              style={{textTransform: 'capitalize'}}
              {...a11yProps(0)}
            />
            <Tab
              label="Online Education"
              style={{textTransform: 'capitalize'}}
              {...a11yProps(1)}
            />
            <Tab
              label="Drop-in audio"
              style={{textTransform: 'capitalize'}}
              {...a11yProps(2)}
            />
            <Tab
              label="Watch Parties"
              style={{textTransform: 'capitalize'}}
              {...a11yProps(3)}
            />
          </Tabs>
          <Select
            value={tabValue}
            input={<BootstrapInput />}
            className={ContainerClasses.selectClass}
            classes={{select: ContainerClasses.selectInnerClass}}
            onChange={(event: any) => {
              setTabValue(event.target.value);
            }}>
            <MenuItem value={0}>Video Meetings</MenuItem>
            <MenuItem value={1}>Online Education</MenuItem>
            <MenuItem value={2}>Drop-in audio</MenuItem>
            <MenuItem value={3}>Watch Parties</MenuItem>
          </Select>
          <TabPanel value={tabValue} index={0}>
            <Box mt={10} mb={10}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Box
                    width="fit-content"
                    marginRight="60px"
                    marginLeft="auto"
                    maxWidth="330px">
                    <img src="./splashAssets/videomeetings.png" width="100%" />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={ContainerClasses.heightCenter}>
                  <Box className={ContainerClasses.font16} textAlign="left">
                    Put your brand front-and-center in every video conference
                    experience.
                    <ul>
                      <li>
                        Create branded video chat/meeting solutions without
                        programming knowledge
                      </li>
                      <li>
                        Customize beautiful templates with your own branding
                      </li>
                      <li>
                        Get a custom video solution started quickly and easily,
                        then customize the codebase to add more features and
                        personalize the UI even further
                      </li>
                    </ul>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Box mt={10} mb={10}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Box
                    width="fit-content"
                    marginRight="60px"
                    marginLeft="auto"
                    maxWidth="330px">
                    <img src="./splashAssets/education.png" width="100%" />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={ContainerClasses.heightCenter}>
                  <Box className={ContainerClasses.font16} textAlign="left">
                    Your course, your brand. With Agora App Builder Education
                    Template your live-online training course will have all the
                    features your students and faculty need for success.
                    <ul>
                      <li>
                        Quickly deliver a robust, branded, online education
                        platform
                      </li>
                      <li>
                        Combine live interactive video with a full-featured
                        online whiteboard in one app
                      </li>
                      <li>
                        Retain class notes and discussions with Persistent
                        Classroom
                      </li>
                      <li>
                        Perfect for immersive, skill-building boot camps,
                        professional certifications and licenses, university
                        certificates, industry or employer-backed programs and
                        more
                      </li>
                    </ul>
                    Education Template Coming Soon
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Box mt={10} mb={10}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Box
                    width="fit-content"
                    marginRight="60px"
                    marginLeft="auto"
                    maxWidth="330px">
                    <img src="./splashAssets/livepodcast.png" width="100%" />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={ContainerClasses.heightCenter}>
                  <Box className={ContainerClasses.font16} textAlign="left">
                    Drop-in audio apps are perfect for live podcasting, virtual
                    conference panels and building influence on social media.
                    <ul>
                      <li>
                        Drive excitement around trending topics and new products
                        with live demonstrations, announcements, or celebrations{' '}
                      </li>
                      <li>
                        Manage conversations easily with built-in host controls
                      </li>
                      <li>
                        Broadcast out to audiences with crystal-clear audio and
                        video{' '}
                      </li>
                      <li>
                        Advanced algorithms manage scaling for you, regardless
                        of how many join the stream{' '}
                      </li>
                      <li>
                        Deliver personalized experiences that can reach small,
                        niche audiences or connect with thousands around the
                        world
                      </li>
                    </ul>
                    Drop-in Audio Template Coming Soon
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <Box mt={10} mb={10}>
              <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                  <Box
                    width="fit-content"
                    marginRight="60px"
                    marginLeft="auto"
                    maxWidth="330px">
                    <img width="100%" src="./splashAssets/watchparties.png" />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  className={ContainerClasses.heightCenter}>
                  <Box className={ContainerClasses.font16} textAlign="left">
                    Distant friends and family enjoy watching movies and TV
                    shows together using interactive video chat to share all the
                    highs, lows, and favorite punchlines.
                    <ul>
                      <li>
                        Rapidly deploy a no-code concept using Agora App Builder
                        and its library of available templates
                      </li>
                      <li>
                        Fully customize the features and interface using the
                        Agora Platform.
                      </li>
                      <li>
                        Deliver a beautifully customized, interactive streaming
                        app with amazing audio/video quality on any device
                        around the world.
                      </li>
                    </ul>
                    Watch Party Template Coming Soon
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
          <b>Features</b>
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
                <b>Beautiful, right out of the box</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Building a delightful, customized video chat app is faster than
                ever with ready-to-use templates containing modern color
                palettes, stylish layouts and fresh graphics.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Default themes</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Get started immediately with the provided themes and then make
                it your own.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Stock images</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Use our great stock icons and images or upload your own for an
                even more personalized app.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Responsive design</b>
              </Box>
              <br />
              <Box className={`${ContainerClasses.font16}`}>
                Ensure an optimal experience for all users regardless of device.
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
                The generated code base is componentized and has clear
                separation of concerns which makes it super easy to take our
                auto-generated code and make it your own.
              </Box>
              <br />
              <Box className={`${ContainerClasses.font18}`}>
                <b>Build once, deploy everywhere </b>
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
          <Link href="/create" style={{textDecoration:"none"}}>
            <Button
              style={{backgroundColor: '#00AEFC'}}
              className={ContainerClasses.button}>
              Launch your product today
            </Button>
          </Link>
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
          <Link href="/create" style={{textDecoration:"none"}}>
            <Button
              style={{backgroundColor: '#00AEFC'}}
              className={ContainerClasses.button}>
              Get Started
            </Button>
          </Link>
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
                  style={{border: '1px solid #fff', height: '100%'}}
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
                    connect our Experts&nbsp;{'>>'}
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box
                  color="#fff"
                  style={{border: '1px solid #fff', height: '100%'}}
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
                    Get Started&nbsp;{'>>'}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        className={ContainerClasses.bredcumbFooter}
        borderBottom="1px solid gray">
        Home / Product / Interactive Live Streaming
      </Box>
      <Box
        style={{backgroundColor: '#fff'}}
        className={ContainerClasses.blueFooter}>
        <Grid container>
          <Grid item sm={3} xs={12}>
            <Box
              color="#212121"
              className={ContainerClasses.font28}
              mr={20}
              pt={10}>
              Connect Now
            </Box>
            <Box
              color="#212121"
              className={ContainerClasses.font16}
              mr={20}
              pt={10}>
              <span>tel, 408,879,5885</span>
              <br />
              <br />
              <a style={{color:"#212121"}} href="https://www.agora.io/en/talk-to-us/"><u>Email our team</u></a>
              <br />
              <br />
              <span>2804, Mission College Blvd. Santa Clara, CA, USA95054</span>
            </Box>
          </Grid>
          <Grid item sm={9} xs={12}>
            <Grid container spacing={10}>
              <Grid item sm={3} xs={12}>
                <Box lineHeight={2.5} style={{textTransform: 'uppercase'}}>
                  Follow Us
                </Box>
                <Box
                  lineHeight={2.5}
                  className={ContainerClasses.font16}
                  display="flex"
                  style={{placeItems: 'center'}}>
                  <Twitter />
                  &nbsp;Twitter
                </Box>
                <Box
                  lineHeight={2.5}
                  className={ContainerClasses.font16}
                  display="flex"
                  style={{placeItems: 'center'}}>
                  <Facebook />
                  &nbsp;Facebook
                </Box>
                <Box
                  lineHeight={2.5}
                  className={ContainerClasses.font16}
                  display="flex"
                  style={{placeItems: 'center'}}>
                  <LinkedIn />
                  &nbsp;LinkedIn
                </Box>
                <Box
                  lineHeight={2.5}
                  className={ContainerClasses.font16}
                  display="flex"
                  style={{placeItems: 'center'}}>
                  <Instagram />
                  &nbsp;Instagram
                </Box>
                <Box
                  lineHeight={2.5}
                  className={ContainerClasses.font16}
                  display="flex"
                  style={{placeItems: 'center'}}>
                  <YouTube />
                  &nbsp;Youtube
                </Box>
                <Box
                  lineHeight={2.5}
                  className={ContainerClasses.font16}
                  display="flex"
                  style={{placeItems: 'center'}}>
                  <Twitter />
                  &nbsp;Medium
                </Box>
                <Box
                  lineHeight={2.5}
                  className={ContainerClasses.font16}
                  display="flex"
                  style={{placeItems: 'center'}}>
                  <GitHub />
                  &nbsp;GitHub
                </Box>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Box lineHeight={2.5} style={{textTransform: 'uppercase'}}>
                  Why Agora
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Agora Advantage
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Products
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Solutions
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Partners
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Success Stories
                </Box>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Box lineHeight={2.5} style={{textTransform: 'uppercase'}}>
                  Company
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  About Us
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Blog
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Compliance & Privacy
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Managment
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Events
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Careers
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Newsroom
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Investor Relations
                </Box>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Box lineHeight={2.5} style={{textTransform: 'uppercase'}}>
                  Get Started
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Login
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Pricing
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Support Plans
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Get Started
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Developer Resources
                </Box>
                <Box lineHeight={2.5} className={ContainerClasses.font16}>
                  Talk to Us
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{backgroundColor: '#021048', color: '#fff'}}
        className={ContainerClasses.blueFooterEnd}>
        <Box display="flex" style={{placeItems: 'center'}}>
          Copyright&nbsp;
          <Copyright style={{fontSize: '1rem'}} />
          &nbsp;2021 Agora.All rights reserved.
        </Box>
        <u style={{marginRight: '15px'}}>Privacy&nbsp;Policy</u>{' '}
        <u style={{marginRight: '15px'}}>Cookie&nbsp;Policy</u>{' '}
        <u style={{marginRight: '15px'}}>Terms&nbsp;of&nbsp;service</u>{' '}
        <u style={{marginRight: '15px'}}>Acceptable&nbsp;Use&nbsp;Policy</u>{' '}
        <u style={{marginRight: '15px'}}>Compliance&nbsp;{'&'}&nbsp;Privacy</u>{' '}
        <u style={{marginRight: '15px'}}>Site&nbsp;Map</u>
      </Box>
      {cookies && (
        <Box
          p={12}
          style={{backgroundColor: '#212121'}}
          className={`${ContainerClasses.font13} ${ContainerClasses.cookieBox}`}
          color="#fff">
          <span>
            We use cookies to offer you a better experience and analyze site
            traffic. By continuing to usethis website, you consent to the use of
            cookies in accorance with our <u>Cookie Policy</u>
          </span>
          <Box
            width="fit-content"
            marginLeft="auto"
            mt={4}
            style={{zoom: '0.8'}}>
            <Button
              style={{
                borderRadius: '50px',
                marginRight: '10px',
                textTransform: 'unset',
              }}
              onClick={() => window.open('https://www.google.com/')}>
              <Box color="#fff" p={3}>
                <u>Tell me how to opt out</u>
              </Box>
            </Button>
            <Button
              style={{
                borderRadius: '50px',
                marginLeft: '10px',
                textTransform: 'unset',
              }}
              onClick={() => {
                localStorage.setItem('cookies', 'true');
                setCookies(false);
              }}
              color="primary"
              variant="contained"
              disableElevation>
              <Box color="#fff" p={3}>
                I Accept
              </Box>
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Home;

import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {useRouter} from 'next/router';
import MenuBox from '../components/MenuBox';
import Link from '../components/Link';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  FormControl,
  Select,
  Button,
  Snackbar,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import moment from 'moment';
import {
  getprojectsList,
  createProjectData,
  deleteProjectData,
  getLoggedInUser,
  createAgoraProjectData,
} from '../config/PerformAPI';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useBackDropStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#099DFD',
  },
}));
const useNavStyles = makeStyles(() =>
  createStyles({
    AppBar: {
      paddingLeft: '70px',
      paddingRight: '40px',
      ['@media (max-width:600px)']: {
        paddingLeft: '30px',
        paddingRight: '30px',
      },
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
  }),
);
const useHadStyles = makeStyles(() =>
  createStyles({
    banerGrid: {
      height: '300px',
      ['@media (max-width:800px)']: {
        height: '250px',
      },
    },
    RightGrid: {
      height: '100%',
      display:"flex",

      padding: "30px 0px 30px 40px",
      ['@media (max-width:600px)']: {
        display: 'none',
      },
      backgroundImage: "url('./bannerbg.png')",
    },
    LeftGrid: {
      paddingLeft: '70px',
      paddingRight: '30px',
      ['@media (max-width:900px)']: {
        fontSize: '24px',
      },
      ['@media (max-width:600px)']: {
        paddingLeft: '60px',
        paddingRight: '60px',
      },
    },
    LeftGridText: {
      color: 'white',
      fontSize: '32px',
      marginLeft:"auto",
      maxWidth:"400px",
      ['@media (max-width:800px)']: {
        fontSize: '26px',
      },
    },
    backGround: {
      height: '100%',
      width: 'auto',
    },
  }),
);
const useCardStyles = makeStyles(() =>
  createStyles({
    Card: {
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '200px',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9F9F9',
      border: '2px dashed #BCBCBC',
      outline: 'none',
      cursor: 'pointer',
    },
    ADD: {
      width: '53px',
    },
    caption: {
      fontWeight: 'bold',
      fontSize: '14px',
      marginTop: '35px',
    },
    CardGrid: {
      width: '25%',
      padding: '10px 20px 10px 20px !important',
      ['@media (max-width:500px)']: {
        width: '100%',
      },
      ['@media (max-width:850px) and (min-width:500px)']: {
        width: '50%',
      },
    },
    media: {
      borderRadius: '4px',
      paddingTop: '56.25%',
    },
    mediaBackGround: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
    },
    caption2: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    caption3: {
      fontWeight: 'normal',
      fontSize: '14px',
      marginTop: '15px',
    },
    navContainer: {
      display: 'flex',
      ['@media (max-width:600px)']: {
        display: 'block',
      },
    },
    navigationBtn: {
      display: 'flex',
      marginLeft: 'auto',
      width: 'fit-content',
      paddingRight: '80px',
      paddingLeft: '80px',
      ['@media (max-width:500px)']: {
        zoom: '0.9',
      },
    },
    nextBtn: {
      width: '80px',
      height: '100%',
      placeItems: 'center',
      padding: '10px',
      marginLeft: '5px',
      borderBottomRightRadius: '50px',
      borderTopRightRadius: '50px',
      '&:hover': {
        backgroundColor: '#349dfb',
        color: '#fff',
        cursor: 'pointer',
      },
    },
    prevBtn: {
      width: '80px',
      height: '100%',
      placeItems: 'center',
      padding: '10px',
      marginRight: '5px',
      borderBottomLeftRadius: '50px',
      borderTopLeftRadius: '50px',
      '&:hover': {
        backgroundColor: '#349dfb',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  }),
);
const useDialogStyles = makeStyles(() =>
  createStyles({
    DialogConatiner: {
      ['@media (max-width:800px)']: {
        padding: '15% 15%',
      },
    },
    caption: {
      fontWeight: 'bold',
      fontSize: '40px',
      textAlign: 'center',
    },
    caption2: {
      fontWeight: 'normal',
      fontSize: '24px',
      marginTop: '24px',
    },
    formControl: {
      width: '100%',
      borderColor: 'gray',
      marginTop: '15px',
      marginBottom: '32px',
    },
    nextButton: {
      width: '100%',
      color: '#fff',
    },
    validation: {
      color: '#CF4040',
      fontSize: '20px',
      fontWeight: 400,
      marginBottom: '20px',
    },
  }),
);

interface FormState {
  Product_Name: string;
  Project_Templete: string;
}
interface IUser {
  email: string;
  id: number;
}
export default function ButtonAppBar() {
  const router = useRouter();
  const NavbarClasses = useNavStyles();
  const BackDropStyle = useBackDropStyles();
  const HadClasses = useHadStyles();
  const CardClasses = useCardStyles();
  const DialogClasses = useDialogStyles();
  const templet: string[] = [
    'Education - Coming Soon',
    'Virtual Event - Coming Later',
    'Watch Party - Coming Later',
  ];
  const [project, setProject] = React.useState<FormState>({
    Product_Name: '',
    Project_Templete: 'Video Conferencing',
  });
  const [validation, setValidation] = React.useState<boolean>(false);
  const [projectsList, setProjectsList] = React.useState<any>([]);
  const [APIError, setAPIError] = React.useState<String>('');
  const [loadding, setLoading] = React.useState<boolean>(false);
  const [loadMore, setLoadMore] = React.useState(true);
  const [userProfile, setUserProfile] = React.useState<IUser>({
    email: '',
    id: 0,
  });
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [skipData, setSkipData] = React.useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (event: any) => {
    setProject({...project, [event.target.name]: event.target.value});
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleProfileClose();
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('token');
      router.push('/');
    }
  };
  React.useEffect(() => {
    router.prefetch('/console')
    if (window.opener) {
      window.opener.postMessage({name: 'test', url: window.location.href}, '*');
      window.close();
    }
  }, []);
  React.useEffect(() => {
    getLoggedInUser()
      .then((res) => {
        console.log(res, 'user');
        setUserProfile(res);
      })
      .catch((error) => console.log(error));
  }, []);
  React.useEffect(() => {
    if (loadMore) {
      setLoading(() => true);
      getprojectsList(skipData)
        .then((data: any) => {
          let newListData = data.projects;
          setProjectsList([...newListData]);
          setAPIError('');
          if (data.projects.length < 3) {
            setLoadMore(false);
          }
          setLoading(() => false);
        })
        .catch((err) => {
          setLoading(() => false);
          setAPIError(err.toString());
        });
    }
  }, [skipData]);
  const onClickDeleteProject = (e: any, id: String) => {
    e.persist();
    e.stopPropagation();
    setLoading(true);
    console.log(id);

    deleteProjectData(id)
      .then((res) => {
        if (res) {
          getprojectsList(skipData)
            .then((data: any) => {
              let newListData = data.projects;
              setProjectsList([...newListData]);
              setAPIError('');
              if (data.projects.length < 3) {
                setLoadMore(false);
              }
            })
            .catch((err) => {
              setLoading(() => false);
              setAPIError(err.toString());
            });
          setLoading(() => false);
        }
      })
      .catch((err) => {
        setLoading(() => false);
        setAPIError(err.toString());
      });
  };
  return (
    <div style={{flexGrow: 1}}>
      <Box position="static">
        <Toolbar className={NavbarClasses.AppBar}>
          <Box display="flex" alignItems="center">
            <Link href="/">
              <img width="130px" src="./splashAssets/logo.png" />
            </Link>
          </Box>
          <Avatar className={NavbarClasses.Avatar} />
          <Box mx={7}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleProfileClick}>
              {userProfile.email.split('@')[0]}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleProfileClose}>
              <MenuItem disabled>{userProfile.email}</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
      <Grid container style={{backgroundImage: "url('./console-background.jpg')",backgroundSize:"contain"}} className={HadClasses.banerGrid} >
        <Grid sm={6} xs={12} item={true} style={{height:"100%"}}>
          <Box
            className={HadClasses.LeftGrid}
            width="100%"
            height="100%"
            px={35}
            fontSize={32}
            display="grid"
            alignItems="center">
            <Typography variant="body1" className={HadClasses.LeftGridText}>
              {' '}
              The fastest way to personalize and publish real-time engagement
              apps
            </Typography>
          </Box>
        </Grid>
        <Grid sm={6} xs={12} className={HadClasses.RightGrid} item={true}>
          <img className={HadClasses.backGround} src="./herobanner.png" />
        </Grid>
      </Grid>
      <Box mt={30}>
        <Box className={CardClasses.navContainer}>
          <Box px={40} lineHeight={3} fontSize="16px" whiteSpace="nowrap">
            <b>Your Projects</b>
          </Box>
          <Box className={CardClasses.navigationBtn} mt={5}>
            {skipData > 0 && (
              <Button
                disableRipple
                disableElevation
                className={CardClasses.prevBtn}
                onClick={() => {
                  setSkipData(skipData - 3);
                }}>
                <ArrowBackIosIcon />
                &nbsp;Back
              </Button>
            )}
            {loadMore && (
              <Button
                disableRipple
                disableElevation
                className={CardClasses.nextBtn}
                onClick={() => {
                  setSkipData(skipData + 3);
                }}>
                Next&nbsp;
                <ArrowForwardIosIcon />
              </Button>
            )}
          </Box>
        </Box>
        <Box position="relative" px={30}>
          <Grid container xs={12} item={true} id="list">
            <Grid item className={CardClasses.CardGrid}>
              <Card onClick={handleClickOpen} className={CardClasses.Card}>
                <img className={CardClasses.ADD} src="./ADD.png" />
                <Typography
                  variant="caption"
                  className={CardClasses.caption}
                  component="h1">
                  New Project
                </Typography>
              </Card>
            </Grid>
            {projectsList &&
              projectsList.map((obj: any, index: number) => (
                <Grid className={CardClasses.CardGrid} key={index}>
                  <Card
                    style={{
                      borderRadius: '10px',
                      cursor: 'pointer',
                      height: '100%',
                      position: 'relative',
                    }}
                    onClick={() => {
                      router.push(`/console?id=${obj.id}`);
                    }}>
                    {console.log(obj.id)}
                    <Card style={{margin: '15px'}}>
                      <CardMedia
                        className={CardClasses.media}
                        image={
                          obj.primary_bg_logo && obj.primary_bg_logo !== ''
                            ? obj.primary_bg_logo
                            : './cardimg.png'
                        }
                      />
                    </Card>
                    <CardContent>
                      <Typography
                        variant="caption"
                        className={CardClasses.caption2}
                        component="h1">
                        {obj.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        className={CardClasses.caption3}
                        component="p">
                        {moment(obj.createdAt).format('MMM DD, yyyy')}
                      </Typography>
                    </CardContent>
                    <Box position="absolute" right="10px" top="10px">
                      <MenuBox
                        deleteAction={(e: any) => {
                          onClickDeleteProject(e, obj.id);
                        }}
                      />
                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
      <Box px={30} mt={15} mb={15}>
        <Box px={10} lineHeight={3} fontSize="16px">
          <b>Default App Templates</b>
        </Box>
        <Grid container xs={12} item={true} id="list">
          <Grid item className={CardClasses.CardGrid}>
            <Card
              onClick={handleClickOpen}
              style={{borderRadius: '10px', cursor: 'pointer', height: '100%'}}>
              <Card style={{margin: '15px'}}>
                <CardMedia
                  className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                  image="./DefaultImg.png"></CardMedia>
              </Card>
              <CardContent>
                <Typography
                  variant="caption"
                  className={CardClasses.caption2}
                  component="h1">
                  Default Agora theme
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className={CardClasses.CardGrid}>
            <Card style={{borderRadius: '10px', height: '100%'}}>
              <Card style={{margin: '15px'}}>
                <CardMedia
                  className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                  image="./education.png"></CardMedia>
              </Card>
              <CardContent>
                <Typography
                  variant="caption"
                  className={CardClasses.caption2}
                  component="h1">
                  Online Class (Coming Soon)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className={CardClasses.CardGrid}>
            <Card style={{borderRadius: '10px', height: '100%'}}>
              <Card style={{margin: '15px'}}>
                <CardMedia
                  className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                  image="./enterprise.png"></CardMedia>
              </Card>
              <CardContent>
                <Typography
                  variant="caption"
                  className={CardClasses.caption2}
                  component="h1">
                  Virtual Event (Coming Soon)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Dialog onClose={handleClose} open={open} maxWidth="lg">
        <Box py={20} px={20} className={DialogClasses.DialogConatiner}>
          <Box component="div" mb={15}>
            <Typography
              variant="caption"
              className={DialogClasses.caption}
              component="h1">
              Name your project
            </Typography>
            <Typography
              variant="caption"
              className={DialogClasses.caption2}
              component="h1">
              Tell us a little about what you’re trying to build
            </Typography>
          </Box>
          <Box>
            <Box fontSize={14} fontWeight="fontWeightBold">
              Product Name
            </Box>
            <TextField
              error={validation}
              className={DialogClasses.formControl}
              id="outlined-basic"
              label="Enter Your Product Name"
              variant="outlined"
              value={project.Product_Name}
              onChange={(event) => {
                console.log('', event.target.value);
                handleValueChange(event);
                if (/^$|^[A-Za-z0-9 ]+$/.test(event.target.value)) {
                  setValidation(false);
                } else {
                  setValidation(true);
                }
              }}
              name={'Product_Name'}
              helperText={
                validation
                  ? 'Please enter a valid name with alpha numeric only.'
                  : ''
              }
            />
            <Box fontSize={14} fontWeight="fontWeightBold">
              Project Templete
            </Box>
            <FormControl
              variant="outlined"
              className={DialogClasses.formControl}>
              
              <Select
                native
                onChange={handleValueChange}
                value={project.Project_Templete}
                name={'Project_Templete'}>
                <option value={'Video Conferencing'}>Video Conferencing</option>
                {templet.map((value, index) => (
                  <option value={value} key={index} disabled>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="primary"
            className={DialogClasses.nextButton}
            disableElevation
            onClick={() => {
              // getLoggedInUser()
              //   .then((res) => console.log(res))
              //   .catch((error) => console.log(error));
              // return;
              if (project.Product_Name === '') {
                setValidation(true);
                return;
              }
              setLoading(() => true);
              if (!validation) {
                const defaultState: any = {
                  id: '',
                  Product_id: '',
                  ownerId: 1,
                  projectName: '',
                  displayName: '',
                  logoRect: '',
                  logoSquare: '',
                  bg: '',
                  AppID: '',
                  primaryColor: '#099DFD',
                  primaryFontColor: '#363636', 
                  secondaryFontColor: '#FFFFFF', 
                  frontEndURL: '',
                  backEndURL: '',
                  pstn: false,
                  precall: false,
                  chat: false,
                  cloudRecording: false,
                  screenSharing: false,
                  APP_CERTIFICATE: '',
                  CUSTOMER_ID: '',
                  CUSTOMER_CERTIFICATE: '',
                  BUCKET_NAME: '',
                  BUCKET_ACCESS_KEY: '',
                  BUCKET_ACCESS_SECRET: '',
                  GOOGLE_CLIENT_ID: '',
                  GOOGLE_CLIENT_SECRET: '',
                  MICROSOFT_CLIENT_ID: '',
                  MICROSOFT_CLIENT_SECRET: '',
                  SLACK_CLIENT_ID:'',
                  SLACK_CLIENT_SECRET:'',
                  APPLE_CLIENT_ID:'',
                  APPLE_KEY_ID:'',
                  APPLE_PRIVATE_KEY:'',
                  APPLE_TEAM_ID:'',
                  REDIRECT_URL: '',
                  PSTN_EMAIL: '',
                  PSTN_PASSWORD: '',
                  PSTN_ACCOUNT:'',
                  HEADING: 'Acme Conferencing',
                  SUBHEADING:
                    'The Real-Time Engagement Platform for meaningful human connections.',
                  encryption: false,
                  ENABLE_GOOGLE_OAUTH: false,
                  ENABLE_MICROSOFT_OAUTH:false,
                  ENABLE_SLACK_OAUTH:false,
                  ENABLE_APPLE_OAUTH:false,
                  RECORDING_REGION: '0',
                  app_backend_deploy_status: '',
                  app_backend_url: '',
                  app_backend_deploy_msg: '',
                };
                createProjectData(defaultState, project.Product_Name)
                  .then((res: any) => {
                    if (res) {
                      setAPIError('');
                      createAgoraProjectData({name: `appbuilder-${res.createProject.id}`})
                        .then((res: any) => {
                          console.log(res, 'create agora project');
                        })
                        .catch((err) => {
                          console.log(err, 'create agora project');
                        });
                      router.push(`/console?id=${res.createProject.id}`);
                      setProject({
                        Product_Name: '',
                        Project_Templete: 'Video Conferencing',
                      });
                      // setLoading(() => false);
                      // handleClose();
                    }
                  })
                  .catch((err) => {
                    setLoading(() => false);
                    setAPIError(err.toString());
                    handleClose();
                  });
              }
            }}>
            <Box fontSize={16}>Next</Box>
          </Button>
        </Box>
        <Backdrop className={BackDropStyle.backdrop} open={loadding}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Dialog>
      <Backdrop className={BackDropStyle.backdrop} open={loadding}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={APIError !== ''}
        autoHideDuration={6000}
        onClose={() => {
          setAPIError('');
        }}>
        <Alert
          onClose={() => {
            setAPIError('');
          }}
          severity="error">
          {APIError}
        </Alert>
      </Snackbar>
    </div>
  );
}

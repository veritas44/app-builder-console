import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {useRouter} from 'next/router';
import MenuBox from '../components/MenuBox'
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
import {getprojectsList, createProjectData, deleteProjectData} from '../config/PerformAPI';
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
    LeftGrid: {
      height: '356px',
    },
    RightGrid: {
      padding: '40px 0px 40px 0px',
      ['@media (max-width:959px)']: {
        display: 'none',
      },
      backgroundImage: "url('./bannerbg.png')",
    },
    LeftGridText: {
      color: 'white',
      fontSize: '40px',
      ['@media (max-width:800px)']: {
        fontSize: '30px',
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
    nextBtn: {
      position: 'absolute',
      right: '0px',
      width: '80px',
      height: '100%',
      top: '0px',
      display: 'grid',
      placeItems: 'center',
      '&:hover': {
        backgroundColor: '#3288d629',
        borderBottomLeftRadius: '100%',
        borderTopLeftRadius: '100%',
        cursor: 'pointer',
      },
    },
    prevBtn: {
      position: 'absolute',
      left: '0px',
      width: '80px',
      height: '100%',
      top: '0px',
      display: 'grid',
      placeItems: 'center',
      '&:hover': {
        backgroundColor: '#3288d629',
        borderBottomRightRadius: '100%',
        borderTopRightRadius: '100%',
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
  const reservedNames = [
    'react',
    'react-native',
    'helloworld',
    'abstract',
    'continue',
    'for',
    'new',
    'switch',
    'assert',
    'default',
    'goto',
    'package',
    'synchronized',
    'boolean',
    'do',
    'if',
    'private',
    'this',
    'break',
    'double',
    'implements',
    'protected',
    'throw',
    'byte',
    'else',
    'import',
    'public',
    'throws',
    'case',
    'enum',
    'instanceof',
    'return',
    'transient',
    'catch',
    'extends',
    'int',
    'short',
    'try',
    'char',
    'final',
    'interface',
    'static',
    'void',
    'class',
    'finally',
    'long',
    'strictfp',
    'volatile',
    'const',
    'float',
    'native',
    'super',
    'while',
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
  const [open, setOpen] = React.useState(false);
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
  React.useEffect(() => {
    if (window.opener) {
      window.opener.postMessage({name: 'test', url: window.location.href}, '*');
      window.close();
    }
  }, []);
  React.useEffect(() => {
    if (loadMore) {
      setLoading(() => true);
      debugger;
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
  const onClickDeleteProject = (e:any,id:String) =>{
    e.persist();
    e.stopPropagation();
    setLoading(true);
    debugger;
    console.log(id);
  
    deleteProjectData(id).then(res =>{
      if(res){
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
    }).catch((err) => {
      setLoading(() => false);
      setAPIError(err.toString());
    });
  }
  return (
    <div style={{flexGrow: 1}}>
      <Box position="static">
        <Toolbar className={NavbarClasses.AppBar}>
          <Box display="flex" alignItems="center">
            <img width="130px" src="./splashAssets/logo.png" />
          </Box>
          <Avatar className={NavbarClasses.Avatar} />
          <Box mx={7}>
            <Typography variant="body1" component="h3">
              Name
            </Typography>
          </Box>
        </Toolbar>
      </Box>
      <Grid container style={{backgroundColor: '#09174f'}}>
        <Grid md={6} sm={12} className={HadClasses.LeftGrid} item={true}>
          <Box
            width="100%"
            height="100%"
            px={35}
            fontSize={40}
            display="grid"
            alignItems="center">
            <Typography variant="body1" className={HadClasses.LeftGridText}>
              {' '}
              The fastest way to personalize and publish real-time engagement
              apps
            </Typography>
          </Box>
        </Grid>
        <Grid md={6} className={HadClasses.RightGrid} item={true}>
          <img className={HadClasses.backGround} src="./herobanner.png" />
        </Grid>
      </Grid>
      <Box mt={30}>
        <Box px={40} lineHeight={3} fontSize="16px">
          <b>Your Projects</b>
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
                        position: 'relative',
                      }} onClick={()=>{router.push(`/console?id=${obj.id}`)}}>
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
                        <MenuBox deleteAction={(e:any)=>{onClickDeleteProject(e,obj.id)}}/>                      
                      </Box>
                    </Card>
                </Grid>
              ))}
          </Grid>
          {loadMore && (
            <Box
              className={CardClasses.nextBtn}
              onClick={() => {
                setSkipData(skipData + 3);
              }}>
              <ArrowForwardIosIcon />
            </Box>
          )}
          {skipData > 0 && (
            <Box
              className={CardClasses.prevBtn}
              onClick={() => {
                setSkipData(skipData - 3);
              }}>
              <ArrowBackIosIcon />
            </Box>
          )}
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
              style={{borderRadius: '10px', cursor: 'pointer'}}>
              <Card style={{margin: '15px'}}>
                <CardMedia
                  className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                  image="./DefaultImg.png">
                </CardMedia>
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
            <Card
              style={{borderRadius: '10px', cursor: 'pointer'}}>
              <Card style={{margin: '15px'}}>
                <CardMedia
                  className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                  image="./education.png">

                </CardMedia>
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
            <Card
              style={{borderRadius: '10px', cursor: 'pointer'}}>
              <Card style={{margin: '15px'}}>
                <CardMedia
                  className={`${CardClasses.media} ${CardClasses.mediaBackGround}`}
                  image="./enterprise.png">
                </CardMedia>
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
              label="Enter Your Project Name"
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
              if (project.Product_Name === '') {
                setValidation(true);
                return;
              } else if (
                reservedNames.includes(project.Product_Name.toLowerCase())
              ) {
                setAPIError(
                  `${project.Product_Name} is reserved please try using another keyword`,
                );
                return;
              }
              setLoading(() => true);
              if (!validation) {
                const defaultState: any = {
                  ownerId: 1,
                  projectName: '',
                  displayName: '',

                  logoRect: '',
                  logoSquare: '',
                  illustration: '',
                  bg: '',
                  AppID: '',
                  primaryColor: '#099DFD',
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
                  CLIENT_ID: '',
                  CLIENT_SECRET: '',
                  REDIRECT_URL: '',
                  PSTN_USERNAME: '',
                  PSTN_PASSWORD: '',
                  HEADING: 'Acme Conferencing',
                  SUBHEADING:
                    'The Real-Time Engagement Platform for meaningful human connections.',
                  encryption: false,
                  ENABLE_OAUTH: false,
                  RECORDING_REGION: '0',
                };
                createProjectData(defaultState, project.Product_Name)
                  .then((res: any) => {
                    if (res) {
                      setAPIError('');
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
          {APIError.includes('keyword') ? (
            <span>
              <a
                style={{color: '#fff'}}
                href={`https://www.google.com/search?q=${project.Product_Name}&sxsrf=ALeKk03pvqwZPehdGkvHyUVxo_lSZjgIPA%3A1621430115659&ei=Yw-lYNmxJ-bWz7sPoq0h&oq=react&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyBQgAEJECMgcIABCHAhAUMgIIADICCAAyAggAMgIIADICCAA6BwgjELADECc6BwgAEEcQsAM6BAgAEEM6BAguEENQnSxYuzFg0TRoAXACeACAAbQBiAHgB5IBAzAuNpgBAKABAaoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwiZ78jw6dXwAhVm63MBHaJWCAAQ4dUDCA4&uact=5`}
                target="_blank">
                {project.Product_Name}
              </a>{' '}
              is reserved please try using another keyword
            </span>
          ) : (
            APIError
          )}
        </Alert>
      </Snackbar>
    </div>
  );
}

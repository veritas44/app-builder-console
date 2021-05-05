import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
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
import { FormControl, Select, Button, Snackbar, Backdrop, CircularProgress } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from '@material-ui/core';
import moment from 'moment';
import { getprojectsList, createProjectData } from '../config/PerformAPI';
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
    },
    Name: {
      color: 'black',
    },
  }),
);
const useHadStyles = makeStyles(() =>
  createStyles({
    LeftGrid: {
      height: '356px',
      background: 'linear-gradient(90deg, #1C6DDB 1.06%, #1A0271 100%)',
    },
    RightGrid: {
      ['@media (max-width:959px)']: {
        display: 'none',
      },
    },
    LeftGridText: {
      color: 'white',
      fontSize: '40px',
      ['@media (max-width:800px)']: {
        fontSize: '30px',
      },
    },
    backGround: {
      height: '356px',
      width: '100%',
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
      cursor: 'pointer'
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
      padding: '20px !important',
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
    caption2: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    caption3: {
      fontWeight: 'normal',
      fontSize: '14px',
      marginTop: '15px',
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
  Project_Name: string;
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
    'react', 'react-native','helloworld',
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
    Project_Name: '',
    Project_Templete: 'Video Conferencing',
  });
  const [validation, setValidation] = React.useState<boolean>(false);
  const [projectsList, setProjectsList] = React.useState<any>([]);
  const [APIError, setAPIError] = React.useState<String>('');
  const [loadding, setLoading] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (event: any) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  React.useEffect(() => {
    if (window.opener) {
      window.opener.postMessage({ name: 'test', url: window.location.href }, '*');
      window.opener.addEventListener('message', (evt: any) => {
        if (evt.data.name === 'test') {
          window.close();
        }
        return;
      });
    }
  }, []);
  React.useEffect(() => {
    setLoading(() => true);
    debugger;
    getprojectsList()
      .then((data: any) => {
        setProjectsList(data.projects);
        setAPIError('');
        setLoading(() => false);
      })
      .catch((err) => {
        setLoading(() => false);
        setAPIError(err.toString());
      });
  }, []);
  return (
    <div style={{ flexGrow: 1 }}>
      <Box position="static" color="white">
        <Toolbar className={NavbarClasses.AppBar}>
          <img className={NavbarClasses.Logo} src="./logo.svg" />
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
      <Grid container>
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
          <img className={HadClasses.backGround} src="./background.png" />
        </Grid>
      </Grid>
      <Box p={30}>
        <Grid container spacing={5} xs={12} item={true}>
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
          {projectsList.map((obj: any, index: number) => (
            <Grid className={CardClasses.CardGrid} key={index}>
              <Link
                href={`/console?id=${obj.id}`}
                style={{ textDecoration: 'none' }}>
                <Card style={{ borderRadius: '10px' }}>
                  <Card style={{ margin: '15px' }}>
                    <CardMedia
                      className={CardClasses.media}
                      image={(obj.primary_bg_logo && obj.primary_bg_logo !== "") ? obj.primary_bg_logo : "./cardimg.png"}
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
                </Card>
              </Link>
            </Grid>
          ))}
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
              Project Name
            </Box>
            <TextField
              error={validation}
              className={DialogClasses.formControl}
              id="outlined-basic"
              label="Enter Your Project Name"
              variant="outlined"
              value={project.Project_Name}
              onChange={(event) => {
                console.log("",event.target.value);
                handleValueChange(event);
                if (/^$|^[A-Za-z0-9 ]+$/.test(event.target.value)) {
                  setValidation(false);
                } else {
                  setValidation(true);
                }
              }}
              name={'Project_Name'}
            />
            {validation == true ? (
              <Box className={DialogClasses.validation}>
                Please enter a valid name with alpha numeric only.
              </Box>
            ) : (
              ''
            )}
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
              if (project.Project_Name === '') {
                setValidation(true);
                return;
              }
              else if (reservedNames.includes(project.Project_Name.toLowerCase())) {
                setAPIError(`${project.Project_Name} keyword is Reserved please try using another keyword`);
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
                createProjectData(defaultState, project.Project_Name)
                  .then((res: any) => {
                    if (res) {
                      setAPIError('');
                      router.push(`/console?id=${res.createProject.id}`);
                      
                      setProject({
                        Project_Name: '',
                        Project_Templete: 'Video Conferencing',
                      });
                      setLoading(() => false);
                      handleClose();
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
      <Snackbar open={APIError !== ''} autoHideDuration={6000} onClose={() => { setAPIError('') }}>
        <Alert onClose={() => { setAPIError('') }} severity="error">
          {APIError}
        </Alert>
      </Snackbar>
    </div>
  );
}

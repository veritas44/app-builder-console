import React from 'react';
import {useRouter} from 'next/router';
import {
  Typography,
  Box,
  Grid,
  makeStyles,
  createStyles,
  Theme,
  Tab,
  Tabs,
  Link,
  Button,
  Toolbar,
  Backdrop,
  CircularProgress,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MuiAlert from '@material-ui/lab/Alert';
import MenuItem from '@material-ui/core/MenuItem';
import Download from '../components/Download';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ProductInfo from '../components/ProductInfo';
import Videocall from '../components/Videocall';
import VideocallMobile from '../components/VideocallMobile';
import ColorFont from '../components/ColorFont';
import JoinScreen from '../components/JoinScreen';
import LogoBackground from '../components/LogoBackground';
import Conferencing from '../components/Conferencing';
import Deploy from '../components/DeployDilog';
import {strValidation} from '../components/validation';
import getURLValue from '../components/getURLparameterValue';
import {
  getprojectById,
  getprojectByIdPooling,
  updateProjectData,
  deployHeroku,
  deployVercel,
} from '../config/PerformAPI';
let vertical: any = 'top';
let horizontal: any = 'center';
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
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  padding?: number;
}

//#endregion
function TabPanel(props: TabPanelProps) {
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

interface ConfigInterface {
  app_frontend_url: string;
  Product_id: string;
  app_backend_deploy_status: any;
  app_backend_url: string;
  app_backend_deploy_msg: string;
  id: string | any;
  ownerId: number;
  checked?: boolean;
  name?: string;
  projectName: string;
  displayName: string;
  logoRect: string | File;
  logoSquare: string | File;
  bg: string | File;
  AppID: string;
  primaryColor: string;
  primaryFontColor: string;
  secondaryFontColor: string;
  frontEndURL: string;
  backEndURL: string;
  pstn: false;
  precall: boolean;
  project_template?: String;
  chat: boolean;
  cloudRecording: false;
  screenSharing: boolean;
  APP_CERTIFICATE: string;
  CUSTOMER_ID: string;
  CUSTOMER_CERTIFICATE: string;
  BUCKET_NAME: string;
  BUCKET_ACCESS_KEY: string;
  BUCKET_ACCESS_SECRET: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  MICROSOFT_CLIENT_ID: string;
  MICROSOFT_CLIENT_SECRET: string;
  SLACK_CLIENT_ID: string;
  SLACK_CLIENT_SECRET: string;
  APPLE_CLIENT_ID: string;
  APPLE_KEY_ID: string;
  APPLE_PRIVATE_KEY: string;
  APPLE_TEAM_ID: string;
  REDIRECT_URL: string;
  PSTN_EMAIL: string;
  PSTN_PASSWORD: string;
  PSTN_ACCOUNT: string;
  HEADING: string;
  SUBHEADING: string;
  encryption: false;
  ENABLE_GOOGLE_OAUTH: false;
  ENABLE_MICROSOFT_OAUTH: boolean;
  ENABLE_SLACK_OAUTH: boolean;
  ENABLE_APPLE_OAUTH: boolean;
  RECORDING_REGION: string;
  sentry_dsn: string;
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export type FormState = ConfigInterface;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      marginLeft: theme.spacing(1.5),
      marginBottom: '5px',
    },
    root: {
      flexGrow: 1,
      height: '100vh',
      width: '100vw',
    },
    paper: {
      minHeight: '60vh',
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderColor: '#099DFD10',
      boxShadow: '-1px 4px 19px 0px rgba(26, 134, 192, 0.16)',
    },

    logo: {
      width: 120,
      height: 41,
      marginRight: 16,
      marginTop: 8,
      marginLeft: 32,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      textDecoration: 'none',
    },
    checkbox: {
      flex: 1,
      display: 'flex',
      margin: theme.spacing(1),
    },
    textField: {
      flex: 1,
      display: 'flex',
      margin: theme.spacing(1.5),
      borderColor: '#099DFD80',
    },

    alignCenter: {
      marginTop: 10,
      marginBottom: 4,
      alignSelf: 'center',
      justifySelf: 'center',
      textAlign: 'center',
    },
    Logo: {
      height: '25px',
      marginRight: 'auto',
    },
    AppBar: {
      paddingLeft: '30px',
      paddingRight: '30px',
      maxHeight: '64px',
    },
    Avatar: {
      width: '30px',
      height: '30px',
      background: '#DEE5EF',
    },
    primarybutton: {
      borderRadius: '50px',
      color: '#fff',
      ['@media (max-width:1028px)']: {
        fontSize: '12px',
      },
    },
    navbarContainer: {
      boxShadow: '0px 2px 10px rgba(144, 158, 169, 0.15)',
      Height: '70px',
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
    popupMenu: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);
const useBackDropStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#099DFD',
  },
  filledErrorCustom: {
    backgroundColor: '#FF8989',
    opacity: '93% !important',
  },
  closeIconError: {
    display: 'block',
  },
}));
const useSideNavStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerGrid: {
      backgroundColor: '#F9F9F9',
      overflowX: 'hidden',
      maxWidth: '280px',
      flexBasis: 'unset',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        maxWidth: '210px',
      },
      ['@media (max-width:550px)']: {
        maxWidth: '100%',
      },
    },
    tabs: {
      borderRight: `0px solid ${theme.palette.divider}`,
      // paddingRight: '30px',
    },
    NavLink: {
      padding: '0px',
      marginBottom: '5px',
      fontSize: '19px',
      ['@media (max-width:910px)']: {
        fontSize: '12px',
      },
      ['@media (max-width:550px)']: {
        fontSize: '20px',
      },
    },
    subContent: {
      height: 'calc(100vh - 70px)',
      overflowY: 'auto',
      width: '280px',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        zoom: 0.65,
      },
      ['@media (max-width:550px)']: {
        width: '100vw',
      },
    },
    agoraMenu0: {
      marginLeft: '-280px',
      width: '280px',
      height: 'calc(100vh - 70px)',
      overflowY: 'auto',
      transition: '400ms',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        marginLeft: '-210px',
        width: '210px',
      },
      ['@media (max-width:550px)']: {
        marginLeft: '-100vw',
        width: '100vw',
      },
    },
    active: {
      display:"grid",
      width: '280px',
      transition: '400ms',
      height: 'calc(100vh - 70px)',
      overflowY: 'auto',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        width: '210px',
      },
      ['@media (max-width:550px)']: {
        width: '100vw',
      },
    },
    wrapper: {
      alignItems: 'start',
      paddingLeft: '0px',
      // paddingRight: '30px',
      textTransform: 'capitalize',
    },
    selected: {
      borderBottomRightRadius: '50px',
      borderTopRightRadius: '50px',
      color: '#616161',
      width: 'calc(100% - 30px)',
    },
    unselected: {
      width: 'calc(100% - 30px)',
      transition: '0.3s',
      opacity: 0.7,
      '&:hover': {
        backgroundColor: '#d1e0f4',
        borderBottomRightRadius: '50px',
        borderTopRightRadius: '50px',
      },
    },
    muTabRoot: {
      minHeight: 'auto',
      minWidth: 'auto',
      maxWidth: '100%',
      textAlign: 'start',
      opacity: 1,
    },
    muTabRootPreview: {
      minHeight: 'auto',
      minWidth: 'auto',
    },
    closeDialog: {
      borderRadius: '12px',
    },
  }),
);

const useContentStyles = makeStyles(() =>
  createStyles({
    NavContainer: {
      height: 'calc(100vh - 70px)',
      overflow: 'hidden',
      // '&::-webkit-scrollbar': {
      //   width: '0em'
      // },
      maxWidth: 'calc(100% - 280px)',
      flexBasis: 'calc(100% - 280px)',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        maxWidth: 'calc(100% - 210px)',
        flexBasis: 'calc(100% - 210px)',
      },
      ['@media (max-width:550px)']: {
        display: 'none',
      },
    },
    topNav: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '40px',
      paddingLeft: '60px',
      paddingRight: '60px',
      flexWrap: 'wrap',
      ['@media screen and (max-width: 900px) and (min-width: 550px)']: {
        zoom: '0.8',
      },
    },

    mainHading: {
      fontWeight: 'bold',
      fontSize: '26px',
      color: '#000000',
    },
    lable: {
      background: 'rgba(10, 157, 252, 0.1)',
      borderRadius: '50px',
      marginLeft: '10px',
      marginRight: 'auto',
    },
    lableText: {
      fontWeight: 'bold',
      fontSize: '16px',
      color: '#099CFC',
      margin: '3px 11px',
    },
  }),
);
export type LogoType = string;
export type LogoStateType = File | null;
export interface LogoHandleInterface {}
function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function beforeUnloadListener(event: any) {
  event.preventDefault();
  return (event.returnValue = "Are you sure you want to close?'");
}
export default function Index() {
  const router = useRouter();
  const classes = useStyles();
  const BackDropStyle = useBackDropStyles();
  const [iconClr, setIconClr] = React.useState({
    icon: '#0A9DFC',
    icon2: '#8D959D',
  });
  const SideBarClasses = useSideNavStyles();
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const ContentClasses = useContentStyles();
  const [value, setValue] = React.useState<number>(1);
  const [value2, setValue2] = React.useState(0);
  const [display, setDisplayTab] = React.useState<boolean>(true);
  const [firstRanderSave, setFirstRenderSave] = React.useState<boolean>(true);
  const defaultState: ConfigInterface = {
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
    precall: true,
    chat: true,
    cloudRecording: false,
    screenSharing: true,
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
    SLACK_CLIENT_ID: '',
    SLACK_CLIENT_SECRET: '',
    APPLE_CLIENT_ID: '',
    APPLE_KEY_ID: '',
    APPLE_PRIVATE_KEY: '',
    APPLE_TEAM_ID: '',
    REDIRECT_URL: '',
    PSTN_EMAIL: '',
    PSTN_PASSWORD: '',
    PSTN_ACCOUNT: '',
    HEADING: 'Acme Conferencing',
    SUBHEADING: 'Where business happens online, on time, each time.',
    encryption: false,
    ENABLE_GOOGLE_OAUTH: false,
    ENABLE_MICROSOFT_OAUTH: false,
    ENABLE_SLACK_OAUTH: false,
    ENABLE_APPLE_OAUTH: false,
    RECORDING_REGION: '0',
    app_frontend_url: '',
    app_backend_deploy_status: '',
    app_backend_url: '',
    app_backend_deploy_msg: '',
    sentry_dsn: '',
  };
  const [apiCalling, setApiCalling] = React.useState<boolean>(true);
  const [state, setState] = React.useState<any>(defaultState);
  const [allowedDeploy, setAllowedDeploy] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [showConfirmBox, setShowConfirmBox] = React.useState<boolean>(false);
  const [saveBtn, setSaveBtn] = React.useState<String>('save');
  const [APIError, setAPIError] = React.useState<String>('');
  const [validationError, setValidationError] = React.useState<boolean>(false);
  const [productInfoErr, setProductInfoErr] = React.useState<boolean>(false);
  const [joinScrErr, setJoinScrErr] = React.useState<boolean>(false);
  const [conferenceErr, setConferenceErr] = React.useState<boolean>(false);
  const [disableDeploy,setDisableDeploy] = React.useState<boolean>(false);
  const [herokuUploadStatus, setHerokuUploadStatus] =
    React.useState<String>('');
  const [vercelUploadState, setVercelUploadState] = React.useState<String>('');
  const [onSaveValidation, setOnSaveValidation] =
    React.useState<boolean | string>(false);
  const [errorHandler, setErrorHandler] = React.useState<any>({
    ProductInformation: {
      ProductName: '',
      ProductId: '',
      ProductDesc: '',
    },
    AgoraConfiguration: {
      AgoraID: '',
      AgoraCertificate: '',
    },
    JoinScreen: {
      Oauth: false,
      ClientID: '',
      ClientSecret: '',
    },
    ConferencingScreen: {
      PSTN: {
        TEmail: '',
        TPassword: '',
      },
      Cloud: {
        CustomerID: '',
        CustomerCertificate: '',
        BucketName: '',
        BucketAccessKey: '',
        BucketAccessSecret: '',
      },
    },
  });
  let dataURL: any = '';

  let timer: any = '';
  const getProjectDataByID = async (id: string) => {
    const data: any = await getprojectById(id);
    if (!data.projectById) {
      router.push('/create');
    }
    const newData: any = data.projectById;
    const tempStateData: any = {...defaultState};
    if (newData) {
      tempStateData.id = newData.id;
      tempStateData.ownerId = newData.ownerId;
      tempStateData.Product_id = newData.productId;
      tempStateData.CUSTOMER_CERTIFICATE = newData.agora_customer_certificate;
      tempStateData.CUSTOMER_ID = newData.agora_customer_id;
      tempStateData.chat = newData.chat;
      tempStateData.cloudRecording = newData.cloud_recording;
      tempStateData.SUBHEADING = newData.description;
      tempStateData.precall = newData.precall_screen;
      tempStateData.bg = newData.primary_bg_logo;
      tempStateData.primaryColor = newData.primary_color;
      tempStateData.primaryFontColor = newData.primary_font_color;
      tempStateData.secondaryFontColor = newData.secondary_font_color;
      tempStateData.logoRect = newData.primary_logo;
      tempStateData.logoSquare = newData.primary_square_logo;
      tempStateData.pstn = newData.pstn_dial_in;
      tempStateData.PSTN_EMAIL = newData.pstn_turbo_bridge_email;
      tempStateData.PSTN_PASSWORD = newData.pstn_turbo_bridge_password;
      tempStateData.PSTN_ACCOUNT = newData.pstn_turbo_bridge_account;
      tempStateData.BUCKET_ACCESS_KEY = newData.s3_bucket_access_key;
      tempStateData.BUCKET_ACCESS_SECRET = newData.s3_bucket_access_secret;
      tempStateData.BUCKET_NAME = newData.s3_bucket_name;
      tempStateData.RECORDING_REGION = newData.s3_bucket_region;
      tempStateData.screenSharing = newData.screen_share;
      tempStateData.HEADING = newData.title;
      tempStateData.encryption = newData.video_encryption;
      tempStateData.app_backend_deploy_status =
        newData.app_backend_deploy_status;
      tempStateData.app_frontend_deploy_status =
        newData.app_frontend_deploy_status;
      tempStateData.GOOGLE_CLIENT_ID = newData.google_client_id;
      tempStateData.GOOGLE_CLIENT_SECRET = newData.google_client_secret;
      tempStateData.MICROSOFT_CLIENT_ID = newData.microsoft_client_id;
      tempStateData.MICROSOFT_CLIENT_SECRET = newData.microsoft_client_secret;
      tempStateData.SLACK_CLIENT_ID = newData.slack_client_id;
      tempStateData.SLACK_CLIENT_SECRET = newData.slack_client_secret;
      tempStateData.APPLE_CLIENT_ID = newData.apple_client_id;
      tempStateData.APPLE_KEY_ID = newData.apple_key_id;
      tempStateData.APPLE_PRIVATE_KEY = newData.apple_private_key;
      tempStateData.APPLE_TEAM_ID = newData.apple_team_id;
      tempStateData.ENABLE_GOOGLE_OAUTH = newData.enable_google_oauth;
      tempStateData.ENABLE_MICROSOFT_OAUTH = newData.enable_microsoft_oauth;
      tempStateData.ENABLE_SLACK_OAUTH = newData.enable_slack_oauth;
      tempStateData.ENABLE_APPLE_OAUTH = newData.enable_apple_oauth;
      tempStateData.app_backend_url = newData.app_backend_url;
      tempStateData.app_frontend_url = newData.app_frontend_url;
      tempStateData.app_backend_deploy_msg = newData.app_backend_deploy_msg;
      tempStateData.sentry_dsn = newData.sentry_dsn;
      tempStateData.APP_CERTIFICATE = newData.agora_app_certificate;
      tempStateData.AppID = newData.agora_app_id;
    }
    return tempStateData;
  };
  const getProjectDataByIDPooling = async (id: string) => {
    const data: any = await getprojectByIdPooling(id);
    const newData: any = data.projectById;
    const tempStateData: any = {
      id: '',
      app_backend_deploy_status: '',
      app_backend_url: '',
      app_frontend_url: '',
      app_frontend_deploy_status: '',
      app_backend_deploy_msg: '',
    };
    if (newData) {
      tempStateData.id = newData.id;
      tempStateData.app_backend_deploy_status =
        newData.app_backend_deploy_status;
      tempStateData.app_backend_url = newData.app_backend_url;
      tempStateData.app_frontend_url = newData.app_frontend_url;
      tempStateData.app_frontend_deploy_status =
        newData.app_frontend_deploy_status;
      tempStateData.app_backend_deploy_msg = newData.app_backend_deploy_msg;
    }
    return tempStateData;
  };

  React.useEffect(() => {
    dataURL = getURLValue(window.location.href);
    if (dataURL.get('id')) {
      getProjectDataByID(dataURL.get('id').toString()).then((response) => {
        setState(response);
        setHerokuUploadStatus(() => response.app_backend_deploy_status);
        setVercelUploadState(() => response.app_frontend_deploy_status);
        if (
          response.app_backend_deploy_status === 'pending' ||
          response.app_frontend_deploy_status === 'pending'
        ) {
          timer = setInterval(async () => {
            const data: any = await getProjectDataByIDPooling(
              dataURL.get('id').toString(),
            );
            setHerokuUploadStatus(() => data.app_backend_deploy_status);
            setVercelUploadState(() => data.app_frontend_deploy_status);
            if (
              data.app_backend_deploy_status !== 'pending' &&
              response.app_frontend_deploy_status !== 'pending'
            ) {
              setState({...response, app_backend_url: data.app_backend_url});
              setState({...response, app_frontend_url: data.app_frontend_url});
              clearInterval(timer);
            }
          }, 30000);
        }
        localStorage.setItem('ProjectDetails', JSON.stringify(response));
        setLoading(() => false);
      });
    } else {
      window.location.href = window.location.origin;
      setLoading(() => false);
    }
  }, []);

  React.useEffect(() => {
    router.prefetch('/create');
    const messageFromPopup = async (evt: any) => {
      if (evt.data.name === 'test' && apiCalling) {
        setApiCalling(() => false);
        const code: any = getURLValue(evt.data.url).get('code');

        if (code && code !== '') {
          dataURL = getURLValue(window.location.href);
          const ProductData: any = await getProjectDataByID(
            dataURL.get('id').toString(),
          );
          if (
            ProductData !== null &&
            localStorage.getItem('deployType') === 'backend'
          ) {
            setHerokuUploadStatus(() => 'pending');
            deployHeroku(code, ProductData)
              .then((res) => {
                if (res) {
                  let counter = 0;
                  timer = setInterval(async () => {
                    counter = counter + 1;
                    const data: any = await getProjectDataByIDPooling(
                      dataURL.get('id').toString(),
                    );
                    setHerokuUploadStatus(() => data.app_backend_deploy_status);
                    if (data.app_backend_deploy_status !== 'pending') {
                      setState(() => {
                        return {
                          ...ProductData,
                          app_backend_url: data.app_backend_url,
                        };
                      });
                      clearInterval(timer);
                    } else if (counter > 10) {
                      setHerokuUploadStatus(() => 'failed');
                      setState(() => {
                        return {
                          ...ProductData,
                          app_backend_url: '',
                        };
                      });
                      clearInterval(timer);
                    }
                  }, 30000);
                }
              })
              .catch((err) => {
                setHerokuUploadStatus(() => 'failed');
                handleDialogClose();
                setAPIError(() => err);
              });
          } else if (
            ProductData !== null &&
            localStorage.getItem('deployType') === 'frontend'
          ) {
            setVercelUploadState(() => 'pending');
            deployVercel(code, ProductData)
              .then((res) => {
                let counter = 0;
                if (res) {
                  timer = setInterval(async () => {
                    counter = counter + 1;
                    const data: any = await getProjectDataByIDPooling(
                      dataURL.get('id').toString(),
                    );
                    setVercelUploadState(() => data.app_frontend_deploy_status);
                    console.log('state', state);
                    if (data.app_frontend_deploy_status !== 'pending') {
                      setState(() => {
                        return {
                          ...ProductData,
                          app_frontend_url: data.app_frontend_url,
                        };
                      });
                      clearInterval(timer);
                    } else if (counter > 10) {
                      setVercelUploadState(() => 'failed');
                      setState(() => {
                        return {
                          ...ProductData,
                          app_frontend_url: '',
                        };
                      });
                      clearInterval(timer);
                    }
                  }, 30000);
                }
              })
              .catch((err) => {
                setVercelUploadState(() => 'failed');
                handleDialogClose();
                setAPIError(() => err);
              });
            console.log(
              'Deploy to vercel',
              ProductData,
              localStorage.getItem('deployType'),
            );
          }
        }
      }
      return;
    };
    window.addEventListener('message', messageFromPopup);
    return () => window.removeEventListener('message', messageFromPopup);
  }, []);

  const Icon = () => (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.67445 0H22.1357C23.1149 0.000334501 24.0539 0.389462 24.7463 1.08185C25.4387 1.77424 25.8278 2.71322 25.8281 3.6924V14.7691C25.8278 15.7483 25.4387 16.6873 24.7463 17.3797C24.0539 18.0721 23.1149 18.4612 22.1357 18.4615H3.67445C2.69527 18.4612 1.75628 18.0721 1.0639 17.3797C0.37151 16.6873 -0.0176163 15.7483 -0.0179501 14.7691V3.6924C-0.0176163 2.71322 0.37151 1.77424 1.0639 1.08185C1.75628 0.389462 2.69527 0.000334507 3.67445 0V0ZM1.82838 14.7691C1.82831 15.0116 1.87602 15.2516 1.96877 15.4757C2.06152 15.6997 2.1975 15.9032 2.36893 16.0746C2.54037 16.2461 2.74391 16.3821 2.96791 16.4748C3.19192 16.5676 3.432 16.6153 3.67445 16.6152H22.1357C22.3782 16.6153 22.6183 16.5676 22.8423 16.4748C23.0663 16.3821 23.2698 16.2461 23.4412 16.0746C23.6127 15.9032 23.7487 15.6997 23.8414 15.4757C23.9342 15.2516 23.9819 15.0116 23.9818 14.7691V3.6924C23.982 3.44992 23.9344 3.20977 23.8417 2.98571C23.749 2.76164 23.613 2.55805 23.4415 2.38659C23.2701 2.21512 23.0665 2.07915 22.8424 1.98645C22.6184 1.89374 22.3782 1.84613 22.1357 1.84633H3.67445C3.43197 1.84613 3.19182 1.89374 2.96775 1.98645C2.74369 2.07915 2.5401 2.21512 2.36864 2.38659C2.19717 2.55805 2.0612 2.76164 1.96849 2.98571C1.87579 3.20977 1.82818 3.44992 1.82838 3.6924V14.7691ZM6.44357 22.1537H19.3666C19.6114 22.1537 19.8463 22.2509 20.0194 22.4241C20.1925 22.5972 20.2898 22.832 20.2898 23.0768C20.2898 23.3217 20.1925 23.5565 20.0194 23.7296C19.8463 23.9027 19.6114 24 19.3666 24H6.44357C6.19879 24 5.96405 23.9027 5.79098 23.7296C5.6179 23.5565 5.52068 23.3217 5.52068 23.077C5.52068 22.8322 5.6179 22.5974 5.79098 22.4243C5.96405 22.2512 6.19879 22.154 6.44357 22.1539V22.1537Z"
        fill={`${iconClr.icon}`}
      />
    </svg>
  );
  const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setDisplayTab(() => false);
    setValue(newValue);
  };
  const handlePrevieTabChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number,
  ) => {
    setValue2(newValue);
  };
  const Icon2 = () => (
    <svg
      width="26"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20.4 26.4">
      <defs>
        <style
          dangerouslySetInnerHTML={{__html: `.cls-1{fill:${iconClr.icon2};}`}}
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M20.2,1.54a3,3,0,0,0-.56-.81A2.72,2.72,0,0,0,17.82,0H2.58A2.72,2.72,0,0,0,.76.73a2.51,2.51,0,0,0-.56.81,2.66,2.66,0,0,0-.2,1V23.91a2.38,2.38,0,0,0,.2.95,2.4,2.4,0,0,0,.56.81,2.62,2.62,0,0,0,1.82.73H17.82a2.62,2.62,0,0,0,1.82-.73,2.51,2.51,0,0,0,.56-.81,2.38,2.38,0,0,0,.2-.95V2.5A2.43,2.43,0,0,0,20.2,1.54Zm-1.83,1V23.91a.56.56,0,0,1-.17.4.67.67,0,0,1-.42.16H2.58a.59.59,0,0,1-.42-.17A.48.48,0,0,1,2,23.91V2.5a.74.74,0,0,1,0-.21.33.33,0,0,1,.11-.15A.59.59,0,0,1,2.34,2a1,1,0,0,1,.24,0H17.82a1,1,0,0,1,.24,0,.46.46,0,0,1,.18.13.7.7,0,0,1,.13.17A.89.89,0,0,1,18.37,2.53Z"
          />
          <path
            className="cls-1"
            d="M13.21,20.18a1.08,1.08,0,0,1-1.08,1.09H8.27a1.09,1.09,0,0,1,0-2.18h3.86A1.08,1.08,0,0,1,13.21,20.18Z"
          />
        </g>
      </g>
    </svg>
  );
  //for changing value
  const handleValueChange = (event: any) => {
    setState({...state, [event.target.name]: event.target.value});
    setSaveBtn('save');
    addEventListener('beforeunload', beforeUnloadListener, {capture: true});
    setFirstRenderSave(false);
  };
  const handleThemeChnage = (theme: any) => {
    setState(() => {
      return {
        ...state,
        primaryColor: theme.primaryColor,
        primaryFontColor: theme.primaryFontColor,
        secondaryFontColor: theme.secondaryFontColor,
        bg: theme.bg,
      };
    });
    setSaveBtn('save');
    addEventListener('beforeunload', beforeUnloadListener, {capture: true});
    setFirstRenderSave(false);
  };
  const handleColorChange = (color: string, name: string) => {
    setState(() => {
      return {...state, [name]: color};
    });
    setSaveBtn('save');
    addEventListener('beforeunload', beforeUnloadListener, {capture: true});
    setFirstRenderSave(false);
  };
  const handleUpload = (file: LogoStateType, name: string) => {
    console.log(name, file);
    setState({
      ...state,
      [name]: file
    });
    const tempObj: any = {...state};
    tempObj[name] = file !== null ? `${file}` : '';
    setSaveBtn('save');
    addEventListener('beforeunload', beforeUnloadListener, {capture: true});
    setFirstRenderSave(false);
  };
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = event.target;
    console.log(name, checked);
    setState({
      ...state,
      [name]: checked,
    });
    const tempObj: any = {...state};
    tempObj[name] = checked;
    setSaveBtn('save');
    addEventListener('beforeunload', beforeUnloadListener, {capture: true});
    setFirstRenderSave(false);
    // localStorage.setItem('ProjectDetails', JSON.stringify(tempObj));
  };
  const onClickBack = () => {
    setDisplayTab(true);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const saveData = async () => {
    let check: boolean = true;
    setValidationError(() => false);
    const tempHandler = {
      ProductInformation: {
        ProductName: '',
        ProductId: '',
        ProductDesc: '',
      },
      AgoraConfiguration: {
        AgoraID: '',
        AgoraCertificate: '',
      },
      JoinScreen: {
        ClientID: '',
        ClientSecret: '',
      },
      ConferencingScreen: {
        PSTN: {
          TEmail: '',
          TPassword: '',
        },
        Cloud: {
          CustomerID: '',
          CustomerCertificate: '',
          BucketName: '',
          BucketAccessKey: '',
          BucketAccessSecret: '',
        },
      },
    };
    setProductInfoErr(false);
    setJoinScrErr(false);
    setConferenceErr(false);
    //#region ---Project
    if (state.SUBHEADING) {
      tempHandler.ProductInformation.ProductDesc = '';
    } else {
      tempHandler.ProductInformation.ProductDesc =
        'Product Description is a required field';
      setProductInfoErr(() => true);
      check = false;
    }
    if (!state.Product_id) {
      check = false;
      setProductInfoErr(() => true);
      tempHandler.ProductInformation.ProductId =
        'Product ID is a required field';
    } else if (reservedNames.includes(state.Product_id.toLowerCase())) {
      check = false;
      setProductInfoErr(() => true);
      tempHandler.ProductInformation.ProductId = `${state.Product_id} is reserved please try using another keyword`;
    } else {
      tempHandler.ProductInformation.ProductId = '';
    }
    if (!(state.HEADING && strValidation(/^[A-Za-z0-9 ]+$/, state.HEADING))) {
      check = false;
      setProductInfoErr(() => true);
      tempHandler.ProductInformation.ProductName =
        'Product Name should alphabetical or numerical value.';
    } else {
      tempHandler.ProductInformation.ProductName = '';
    }
    //#endregion
    //#region ---Agora App
    //#endregion
    //#region ---Oauth App
    if (state.ENABLE_GOOGLE_OAUTH) {
      if (state.GOOGLE_CLIENT_ID) {
        tempHandler.JoinScreen.ClientID = '';
      } else {
        setJoinScrErr(() => true);
        tempHandler.JoinScreen.ClientID =
          'Google OAuth Client ID is a required field';
        check = false;
      }
      if (state.GOOGLE_CLIENT_SECRET) {
        tempHandler.JoinScreen.ClientSecret = '';
      } else {
        setJoinScrErr(() => true);
        tempHandler.JoinScreen.ClientSecret =
          'Google OAuth Client secret is a required field';
        check = false;
      }
    } else {
      tempHandler.JoinScreen.ClientID = '';
      tempHandler.JoinScreen.ClientSecret = '';
    }
    //#endregion

    //#region ---PSTN App
    if (state.pstn) {
      if (state.PSTN_EMAIL) {
        tempHandler.ConferencingScreen.PSTN.TEmail = '';
      } else {
        setConferenceErr(() => true);
        tempHandler.ConferencingScreen.PSTN.TEmail =
          'Turbobridge Email is a required field';
        check = false;
      }
      if (state.PSTN_PASSWORD) {
        tempHandler.ConferencingScreen.PSTN.TPassword = '';
      } else {
        setConferenceErr(() => true);
        tempHandler.ConferencingScreen.PSTN.TPassword =
          'Turbobridge Password is a required field';
        check = false;
      }
    } else {
      tempHandler.ConferencingScreen.PSTN.TEmail = '';
      tempHandler.ConferencingScreen.PSTN.TPassword = '';
    }
    //#endregion
    //#region ---Cloud App
    if (state.cloudRecording) {
      if (state.CUSTOMER_ID) {
        tempHandler.ConferencingScreen.Cloud.CustomerID = '';
      } else {
        setConferenceErr(() => true);
        tempHandler.ConferencingScreen.Cloud.CustomerID =
          'Agora Customer ID is a required field';
        check = false;
      }
      if (state.CUSTOMER_CERTIFICATE) {
        tempHandler.ConferencingScreen.Cloud.CustomerCertificate = '';
      } else {
        setConferenceErr(() => true);
        tempHandler.ConferencingScreen.Cloud.CustomerCertificate =
          'Agora Customer Certificate is a required field';
        check = false;
      }
      if (state.BUCKET_NAME && /^$|^[A-Za-z0-9]+$/.test(state.BUCKET_NAME)) {
        tempHandler.ConferencingScreen.Cloud.BucketName = '';
      } else {
        setConferenceErr(() => true);
        tempHandler.ConferencingScreen.Cloud.BucketName =
          '​AWS S3 Bucket Name is a required field and can contain only alpha-numerical characters';
        check = false;
      }
      if (state.BUCKET_ACCESS_KEY) {
        tempHandler.ConferencingScreen.Cloud.BucketAccessKey = '';
      } else {
        setConferenceErr(() => true);
        tempHandler.ConferencingScreen.Cloud.BucketAccessKey =
          'AWS S3 Bucket Access Key is a required field';
        check = false;
      }
      if (state.BUCKET_ACCESS_SECRET) {
        tempHandler.ConferencingScreen.Cloud.BucketAccessSecret = '';
      } else {
        setConferenceErr(() => true);
        tempHandler.ConferencingScreen.Cloud.BucketAccessSecret =
          'AWS S3 Bucket Access Secret is a required field';
        check = false;
      }
    } else {
      tempHandler.ConferencingScreen.Cloud.CustomerID = '';
      tempHandler.ConferencingScreen.Cloud.CustomerCertificate = '';
      tempHandler.ConferencingScreen.Cloud.BucketName = '';
      tempHandler.ConferencingScreen.Cloud.BucketAccessKey = '';
      tempHandler.ConferencingScreen.Cloud.BucketAccessSecret = '';
    }
    //#endregion
    if (check) {
      setErrorHandler(() => tempHandler);
      const {ownerId, ...rest} = state;
      setSaveBtn('saving');
      addEventListener('beforeunload', beforeUnloadListener, {capture: true});
      let apiResponse = false;
      try {
        const data = await updateProjectData(rest);
        if (data) {
          setAllowedDeploy(() => true);
          setSaveBtn('saved');
          removeEventListener('beforeunload', beforeUnloadListener, {
            capture: true,
          });
          apiResponse = true;
          setOnSaveValidation(false);
        }
      } catch (error) {
        setAllowedDeploy(() => false);
        setSaveBtn('save');
        addEventListener('beforeunload', beforeUnloadListener, {capture: true});
        setFirstRenderSave(false);
        setAPIError(error);
        setOnSaveValidation(error);
      }
      return apiResponse;
    } else {
      onClickBack();
      setErrorHandler(() => tempHandler);
      setValidationError(() => true);
      setOnSaveValidation('Required fields are not filled. Please check');
      return false;
    }
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const DeployApp = async () => {
    setDisableDeploy(() =>true);
    if (saveBtn === 'saved' && allowedDeploy) {
      handleClickOpenDialog();
    } else {
      const apiResponse = await saveData();
      if (apiResponse) {
        handleClickOpenDialog();
      }
    }
    setDisableDeploy(() =>false);
  };
  return (
    <div style={{fontFamily: 'acumin-pro, sans-serif', fontStyle: 'normal'}}>
      <div className={classes.root}>
        <Box
          position="static"
          color="white"
          className={classes.navbarContainer}>
          <Toolbar className={classes.AppBar}>
            <Link
              style={{marginRight: 'auto'}}
              href="/create"
              className={classes.row}>
              <img width="130px" height="100%" alt="logo Image" src="./logo.png" />
            </Link>
            <Box mx={7} className={classes.sectionDesktop}>
              <Box mx={6}>
                <Button
                  variant="outlined"
                  style={{borderRadius: '50px'}}
                  disableRipple={true}
                  onClick={() => {
                    if (saveBtn !== 'saved' && firstRanderSave !== true) {
                      setShowConfirmBox(true);
                    } else {
                      router.push('/create');
                    }
                  }}>
                  <Box mx={18}>Close</Box>
                </Button>
              </Box>
              {/* <Box mx={6}>
                <Link
                  href="/docs"
                  style={{textDecoration: 'none'}}
                  target="_blank">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{borderRadius: '50px'}}
                    disableRipple={true}>
                    <Box mx={18}>Docs</Box>
                  </Button>
                </Link>
              </Box> */}
              <Box mx={6}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{borderRadius: '50px'}}
                  onClick={saveData}
                  disableRipple={true}>
                  <Box mx={18} display="flex">
                    <Box>{saveBtn}</Box>
                    {saveBtn === 'save' && onSaveValidation && (
                      <Tooltip title={onSaveValidation}>
                        <InfoIcon
                          style={{color: '#FF8989', marginLeft: '10px'}}
                        />
                      </Tooltip>
                    )}
                  </Box>
                </Button>
              </Box>
              <Box mx={6}>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  disabled={disableDeploy}
                  className={classes.primarybutton}
                  onClick={DeployApp}>
                  <Box mx={9}>Deploy your App</Box>
                </Button>
              </Box>
              <Box mx={6}>
                <Download
                  saveBtnState={saveBtn}
                  configData={state}
                  saveBtnFn={saveData}
                />
              </Box>
            </Box>
            <Box mx={7} className={classes.sectionMobile}>
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
                classes={{
                  paper: classes.popupMenu,
                }}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: 48 * 4.5,
                    width: '25ch',
                  },
                }}>
                <MenuItem>
                  <Button
                    variant="outlined"
                    style={{borderRadius: '50px', width: '100%'}}
                    disableRipple={true}
                    onClick={() => {
                      if (saveBtn !== 'saved' && firstRanderSave !== true) {
                        setShowConfirmBox(true);
                      } else {
                        router.push('/create');
                      }
                    }}>
                    <Box>Close</Box>
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    disableRipple={true}
                    style={{borderRadius: '50px', width: '100%'}}
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      saveData();
                    }}>
                    <Box mx={18} display="flex">
                      <Box mr={5}>{saveBtn}</Box>
                      {saveBtn !== 'save' && (
                        <Tooltip
                          title={
                            saveBtn === 'saved' ? 'Changes Saved' : 'Saving...'
                          }>
                          <InfoIcon
                            style={
                              saveBtn === 'saved'
                                ? {color: '#099CFC', marginLeft: '10px'}
                                : saveBtn === 'save'
                                ? {color: '#FF8989', marginLeft: '10px'}
                                : {color: '#FFC107', marginLeft: '10px'}
                            }
                          />
                        </Tooltip>
                      )}
                      {saveBtn === 'save' && onSaveValidation && (
                        <Tooltip title={onSaveValidation}>
                          <InfoIcon
                            style={{color: '#FF8989', marginLeft: '10px'}}
                          />
                        </Tooltip>
                      )}
                    </Box>
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.primarybutton}
                    style={{width: '100%'}}
                    disabled={disableDeploy}
                    onClick={DeployApp}>
                    <Box>Deploy your App</Box>
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Download
                    saveBtnState={saveBtn}
                    configData={state}
                    saveBtnFn={saveData}
                  />
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Box>
        <Deploy
          handleDialogClose={handleDialogClose}
          openDialog={openDialog}
          allowedDeploy={allowedDeploy}
          herokuUploadStatus={herokuUploadStatus}
          vercelUploadState={vercelUploadState}
          value={state}
          saveBtn={saveBtn}
        />
        <Dialog
          open={showConfirmBox}
          classes={{
            paper: SideBarClasses.closeDialog,
          }}
          onClose={() => {
            setShowConfirmBox(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <Box p={12}>
            <DialogTitle
              id="alert-dialog-title"
              style={{padding: '5px 0px 0px 0px'}}>
              <Box display="grid" justifyContent="center">
                <IconButton
                  style={{color: '#349dfb', padding: '0px'}}
                  aria-label="close"
                  onClick={() => {
                    setShowConfirmBox(false);
                  }}>
                  <InfoOutlinedIcon style={{fontSize: '40px'}} />
                </IconButton>
                <Box fontSize="26px" style={{color: '#349dfb'}}>
                  Save your project
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Box fontSize="18px">Do you want to save your changes?</Box>
            </DialogContent>
            <DialogActions
              style={{justifyContent: 'center', marginBottom: '10px'}}>
              <Button
                variant="outlined"
                onClick={() => {
                  setShowConfirmBox(false);
                  router.push(`/create`);
                }}
                style={{borderRadius: '50px', width: '40%'}}
                color="primary">
                Cancel
              </Button>
              <Button
                variant="contained"
                style={{color: '#fff', borderRadius: '50px', width: '40%',marginLeft:"30px"}}
                onClick={async () => {
                  const saveResponse = await saveData();
                  if (saveResponse) {
                    setShowConfirmBox(false);
                    router.push(`/create`);
                  } else {
                    setShowConfirmBox(false);
                  }
                }}
                color="primary"
                autoFocus>
                Save
              </Button>
            </DialogActions>
          </Box>
        </Dialog>

        <Grid container item>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            className={SideBarClasses.containerGrid}>
            <Box display="inline-flex">
              <Box
                py={20}
                className={
                  display ? SideBarClasses.active : SideBarClasses.agoraMenu0
                }>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleTabChange}
                  aria-label="Vertical tabs"
                  className={SideBarClasses.tabs}
                  indicatorColor="primary"
                  TabIndicatorProps={{style: {display: 'none'}}}>
                  <Box
                    fontWeight={600}
                    fontSize={22}
                    mb={6}
                    ml={15}
                    width="fit-content"
                    >
                    General
                  </Box>
                  <Tab
                    className={SideBarClasses.NavLink}
                    label={
                      <Box display="flex" width={1} alignItems="center">
                        <Box
                          width={1}
                          pl={15}
                          className={SideBarClasses.unselected}>
                          <span>Product Information</span>
                        </Box>
                        {productInfoErr ? (
                          <InfoIcon
                            style={{
                              color: '#FF8989',
                              fontSize: '19px',
                              marginLeft: '2px',
                            }}
                          />
                        ) : (
                          ''
                        )}
                      </Box>
                    }
                    {...a11yProps(0)}
                    classes={{
                      wrapper: SideBarClasses.wrapper,
                      root: SideBarClasses.muTabRoot,
                    }}></Tab>
                  <Box
                    fontWeight={600}
                    fontSize={22}
                    pb={1}
                    mb={6}
                    mt={15}
                    ml={15}
                    width="fit-content"
                    >
                    Branding
                  </Box>
                  <Tab
                    className={SideBarClasses.NavLink}
                    label={
                      <Box display="flex" width={1} alignItems="center">
                        <Box
                          width={1}
                          pl={15}
                          className={SideBarClasses.unselected}>
                          <span>Theme</span>
                        </Box>
                      </Box>
                    }
                    {...a11yProps(2)}
                    classes={{
                      wrapper: SideBarClasses.wrapper,
                      root: SideBarClasses.muTabRoot,
                    }}
                  />
                  <Tab
                    className={SideBarClasses.NavLink}
                    label={
                      <Box display="flex" width={1} alignItems="center">
                        <Box
                          width={1}
                          pl={15}
                          className={SideBarClasses.unselected}>
                          <span>{'Logos'}</span>
                        </Box>
                      </Box>
                    }
                    {...a11yProps(3)}
                    classes={{
                      wrapper: SideBarClasses.wrapper,
                      root: SideBarClasses.muTabRoot,
                    }}
                  />
                  <Box
                    fontWeight={600}
                    fontSize={22}
                    mb={6}
                    mt={15}
                    ml={15}
                    width="fit-content"
                    >
                    App Features
                  </Box>
                  <Tab
                    className={SideBarClasses.NavLink}
                    label={
                      <Box display="flex" width={1} alignItems="center">
                        <Box
                          width={1}
                          pl={15}
                          className={SideBarClasses.unselected}>
                          <span>Authentication</span>
                        </Box>
                        {joinScrErr ? (
                          <InfoIcon
                            style={{
                              color: '#FF8989',
                              fontSize: '19px',
                              marginLeft: '2px',
                            }}
                          />
                        ) : (
                          ''
                        )}
                      </Box>
                    }
                    {...a11yProps(4)}
                    classes={{
                      wrapper: SideBarClasses.wrapper,
                      root: SideBarClasses.muTabRoot,
                    }}
                  />
                  <Tab
                    className={SideBarClasses.NavLink}
                    label={
                      <Box display="flex" width={1} alignItems="center">
                        <Box
                          width={1}
                          pl={15}
                          className={SideBarClasses.unselected}>
                          <span>Conferencing Screen</span>
                        </Box>
                        {conferenceErr ? (
                          <InfoIcon
                            style={{
                              color: '#FF8989',
                              fontSize: '19px',
                              marginLeft: '2px',
                            }}
                          />
                        ) : (
                          ''
                        )}
                      </Box>
                    }
                    {...a11yProps(5)}
                    classes={{
                      wrapper: SideBarClasses.wrapper,
                      root: SideBarClasses.muTabRoot,
                    }}
                  />
                </Tabs>
                <Box textAlign="center" marginTop="auto">
                  <Box>Have a question?</Box>
                  <Link
                    href="/docs"
                    style={{textDecoration: 'none'}}
                    target="_blank">
                    <Typography style={{fontWeight: 700}}>
                      Visit the Docs
                    </Typography>
                  </Link>
                  <Link
                    href="https://www.agora.io/en/join-slack/"
                    target="_blank"
                    style={{textDecoration: 'none'}}>
                    <Typography style={{fontWeight: 700}}>
                      Join the Agora Slack Community
                    </Typography>
                  </Link>
                </Box>
              </Box>
              <Box py={20} className={SideBarClasses.subContent}>
                <TabPanel padding={0} value={value} index={1}>
                  <ProductInfo
                    onClickBack={onClickBack}
                    handleValueChange={handleValueChange}
                    value={state}
                    errorHandler={errorHandler}
                    setErrorHandler={setErrorHandler}
                  />
                </TabPanel>
                <TabPanel padding={0} value={value} index={3}>
                  <ColorFont
                    onClickBack={onClickBack}
                    handleColorChange={handleColorChange}
                    handleThemeChnage={handleThemeChnage}
                    handleValueChange={handleValueChange}
                    handleUpload={handleUpload}
                    value={state}
                  />
                </TabPanel>
                <TabPanel padding={0} value={value} index={4}>
                  <LogoBackground
                    value={state}
                    onClickBack={onClickBack}
                    handleUpload={handleUpload}
                  />
                </TabPanel>
                <TabPanel padding={0} value={value} index={6}>
                  <JoinScreen
                    value={state}
                    onClickBack={onClickBack}
                    handleCheckChange={handleCheckChange}
                    handleValueChange={handleValueChange}
                    errorHandler={errorHandler}
                    setErrorHandler={setErrorHandler}
                  />
                </TabPanel>
                <TabPanel padding={0} value={value} index={7}>
                  <Conferencing
                    onClickBack={onClickBack}
                    handleValueChange={handleValueChange}
                    value={state}
                    handleCheckChange={handleCheckChange}
                    errorHandler={errorHandler}
                    setErrorHandler={setErrorHandler}
                  />
                </TabPanel>
              </Box>
            </Box>
          </Grid>
          {!loading ? (
            <Grid
              item
              xs={12}
              sm={8}
              md={9}
              className={ContentClasses.NavContainer}>
              <Box className={ContentClasses.topNav}>
                <Typography
                  variant="caption"
                  className={ContentClasses.mainHading}
                  component="h1">
                  {state.HEADING !== '' ? state.HEADING : 'Acme Conferencing'}
                </Typography>
                <Box className={ContentClasses.lable}>
                  <Typography
                    variant="caption"
                    className={ContentClasses.lableText}
                    component="p">
                    Video Meetings
                  </Typography>
                </Box>
                <Tabs
                  value={value2}
                  onChange={handlePrevieTabChange}
                  aria-label="nav tabs example"
                  TabIndicatorProps={{style: {display: 'none'}}}>
                  <Tab
                    icon={<Icon />}
                    {...a11yProps(0)}
                    classes={{root: SideBarClasses.muTabRootPreview}}
                    onClick={() => {
                      setIconClr({
                        icon: '#0A9DFC',
                        icon2: '#8D959D',
                      });
                    }}
                  />
                  <Tab
                    icon={<Icon2 />}
                    {...a11yProps(1)}
                    classes={{root: SideBarClasses.muTabRootPreview}}
                    onClick={() => {
                      setIconClr({
                        icon: '#8D959D',
                        icon2: '#0A9DFC',
                      });
                    }}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value2} index={0}>
                {[1, 3, 4, 6].map((e) => (
                  <TabPanel padding={0} value={value} index={e} key={e}>
                    <div
                      style={{
                        display: 'grid',
                        placeContent: 'center',
                        margin: -50,
                        zIndex: -1,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: `
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1394" height="calc(100vh - 60px)" viewBox="0 0 1394 985">
  <defs>
    <filter id="Rectangle_288" x="0" y="0" width="1394" height="985" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="43" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1136 730">
      <image width="1136" height="730" xlink:href="${
        state.bg ?typeof state.bg === 'string'?state.bg: URL.createObjectURL(state.bg) : './transparent.png'
      }"/>
    </pattern>
    <pattern id="pattern-2" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 300 103">
      <image width="300" height="103" xlink:href="${
        state.logoRect ?typeof state.logoRect === 'string'?state.logoRect: URL.createObjectURL(state.logoRect) : './transparent.png'
      }"/>
    </pattern>
  </defs>
  <g id="Group_501" data-name="Group 501" transform="translate(66 86)" fill=${!state.bg ? '#fff': ''}>
    <g transform="matrix(1, 0, 0, 1, -66, -86)" filter="url(#Rectangle_288)">
      <rect id="Rectangle_288-2" data-name="Rectangle 288" width="1136" height="727" rx="14" transform="translate(129 126)"/>
    </g>
    <g id="Group_500" data-name="Group 500">
      <rect id="temp" width="1136" height="730" rx="10" transform="translate(63 40)" fill="url(#pattern)"/>
      <rect id="Agora-new-logo-rgb" width="82" height="28" transform="translate(590 133)" fill="url(#pattern-2)"/>
      <text id="Together_Business" data-name="Together Business" transform="translate(631 252)" dominant-baseline="middle" text-anchor="middle" fill=${
        state.primaryFontColor
      } font-size="25" font-family="Roboto-Bold, Roboto" font-weight="700">${
                          state.HEADING
                        }</text>
      <text id="Where_business_happens_online_on_time_each_time." data-name="Where business happens online, on time, each time." transform="translate(631 288)" fill=${
        state.primaryFontColor
      } font-size="17" font-family="Roboto-Medium, Roboto" font-weight="500" dominant-baseline="middle" text-anchor="middle">${
                          state.SUBHEADING
                        }</text>
      <g id="Group_494" data-name="Group 494" transform="translate(434 478.61)">
        <rect id="Rectangle_279" data-name="Rectangle 279" width="394" height="44" rx="22" transform="translate(0 0.39)" fill="${
          state.primaryColor
        }"/>
        <text id="Create_Meeting" data-name="Create Meeting" transform="translate(187 26.39)" fill="#fff" font-size="14" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="-48.019" y="0">Create Meeting</tspan></text>
      </g>
      <g id="Group_493" data-name="Group 493" transform="translate(434 605.777)">
        <g id="Rectangle_280" fill-opacity="0" data-name="Rectangle 280" transform="translate(0 0.223)" stroke="${
          state.primaryColor
        }" stroke-width="1">
          <rect width="394" height="45" rx="22.5" stroke="none"/>
          <rect x="0.5" y="0.5" width="393" height="44" rx="22" fill="none"/>
        </g>
        <text id="Meeting_ID_or_URL" data-name="Meeting ID or URL" transform="translate(183 26.223)" fill="${
          state.primaryColor
        }" font-size="14" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="-56.561" y="0">Meeting ID or URL</tspan></text>
      </g>
      <g id="Group_492" data-name="Group 492" transform="translate(117 -39)">
        <text id="Use_PSTN_Join_by_dialing_a_number_" data-name="Use PSTN (Join by dialing a number)" transform="translate(407 489)" fill=${
          state.primaryFontColor
        } font-size="13" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">Use PSTN (Join by dialing a number)</tspan></text>
        <g id="Group_491" data-name="Group 491">
          <text id="Restrict_Host_Controls_Separate_host_link_" data-name="Restrict Host Controls (Separate host link)" transform="translate(407 458)" fill=${
            state.primaryFontColor
          } font-size="13" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">Restrict Host Controls (Separate host link)</tspan></text>
          <g id="Rectangle_281" fill-opacity="0" data-name="Rectangle 281" transform="translate(379 444)" stroke="#b9b2b2" stroke-width="2">
            <rect width="20" height="20" rx="6" stroke="none"/>
            <rect x="1" y="1" width="18" height="18" rx="5" fill="none"/>
          </g>
        </g>
        <g id="Rectangle_284" fill-opacity="0" data-name="Rectangle 284" transform="translate(379 476)" stroke="#b9b2b2" stroke-width="2">
          <rect width="20" height="19" rx="6" stroke="none"/>
          <rect x="1" y="1" width="18" height="17" rx="5" fill="none"/>
        </g>
      </g>
      <path id="Path_581" data-name="Path 581" d="M50.5,42.363c0-3.791,3.834-6.863,8.563-6.863H1177.937c4.727,0,8.563,3.073,8.563,6.863V63.971H50.5Z" transform="translate(12.5 4.5)" fill="#fff"/>
      <circle id="Ellipse_16" data-name="Ellipse 16" cx="5.556" cy="5.556" r="5.556" transform="translate(73 50)" fill="#c4c4c4"/>
      <circle id="Ellipse_17" data-name="Ellipse 17" cx="5.556" cy="5.556" r="5.556" transform="translate(89.667 50)" fill="#c4c4c4"/>
      <circle id="Ellipse_18" data-name="Ellipse 18" cx="5.556" cy="5.556" r="5.556" transform="translate(106.333 50)" fill="#c4c4c4"/>
      <g id="Group_495" data-name="Group 495" transform="translate(434 336.776)">
        <g id="Component_2_7" data-name="Component 2 – 7" transform="translate(0 0.224)">
          <g id="Rectangle_278" fill-opacity="0" data-name="Rectangle 278" transform="translate(0 0)" fill="#fff" stroke="${
            state.primaryColor
          }" stroke-width="1">
            <rect width="395" height="44" rx="22" stroke="none"/>
            <rect x="0.5" y="0.5" width="394" height="43" rx="21.5" fill="none"/>
          </g>
        </g>
        <text id="AcmeMeeting" fill=${
          state.primaryFontColor
        } transform="translate(188 26.224)" font-size="14" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="-43.788" y="0">AcmeMeeting</tspan></text>
      </g>
      <line id="Line_79" data-name="Line 79" x2="210" transform="translate(526.5 564.5)" fill="none" stroke="${
        state.primaryColor
      }" stroke-width="1" opacity="0.499"/>
    </g>
  </g>
</svg>
`,
                      }}
                    />
                  </TabPanel>
                ))}

                {[7].map((e) => (
                  <TabPanel padding={0} value={value} index={e} key={e}>
                    <div
                      style={{
                        border: '8px solid #FFFFFF',
                        boxShadow: ' 0px 15px 40px rgba(0, 0, 0, 0.100333)',
                        borderRadius: '10px',
                        margin: '50px auto',
                        width: 'fit-content',
                      }}>
                      <Videocall
                        primaryColor={state.primaryColor}
                        primaryFontColor={state.primaryFontColor}
                        secondaryFontColor={state.secondaryFontColor}
                        bg={state.bg}
                        defaultbg="./transparent.png"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanel>
              <TabPanel value={value2} index={1}>
                {[1, 3, 4, 6].map((e) => (
                  <TabPanel padding={0} value={value} index={e} key={e}>
                    <div
                      style={{
                        display: 'grid',
                        placeContent: 'center',
                        marginTop: -40,
                        zIndex: -1,
                      }}
                      dangerouslySetInnerHTML={{
                        __html: `<svg style="z-index: -1;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="629" height="calc(100vh - 60px)" viewBox="0 0 629 950">
                              <defs>
                                <filter id="Rectangle_287" x="10.684" y="-11.642" width="602" height="927" filterUnits="userSpaceOnUse">
                                  <feOffset input="SourceAlpha"/>
                                  <feGaussianBlur stdDeviation="49.5" result="blur"/>
                                  <feFlood flood-opacity="0.161"/>
                                  <feComposite operator="in" in2="blur"/>
                                  <feComposite in="SourceGraphic"/>
                                </filter>
                                <clipPath id="clip-path">
                                  <path id="Path_588" data-name="Path 588" d="M134.632,40a1.488,1.488,0,0,1,1.473,1.278h0a37.2,37.2,0,0,0,36.826,31.939H269.74a37.2,37.2,0,0,0,36.826-31.939h0A1.488,1.488,0,0,1,308.039,40h36.671a37.961,37.961,0,0,1,37.961,37.961v597.89a37.962,37.962,0,0,1-37.961,37.961H97.961A37.961,37.961,0,0,1,60,675.851V77.961A37.961,37.961,0,0,1,97.961,40Z" transform="translate(-1.02 -0.765)" fill="#fff" stroke="#707070" stroke-width="0.2"/>
                                </clipPath>
                                <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1136 730">
                                  <image width="1136" height="730" xlink:href="${
                                    state.bg ?typeof state.bg === 'string'?state.bg: URL.createObjectURL(state.bg) : './transparent.png'
                                  }"/>
                                </pattern>
                                <pattern id="pattern-2" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 300 103">
                                  <image width="300" height="103" xlink:href="${
                                    state.logoRect ?typeof state.logoRect === 'string'?state.logoRect: URL.createObjectURL(state.logoRect) : './transparent.png'
                                  }"/>
                                </pattern>
                                <clipPath id="clip-SVG_4">
                                  <rect width="629" height="950"/>
                                </clipPath>
                              </defs>
                              <g id="SVG_4" data-name="SVG – 4" clip-path="url(#clip-SVG_4)">
                                <rect width="629" height="950" fill="#fff"/>
                                <g id="Group_498" data-name="Group 498" transform="translate(-253.816 69.858)">
                                  <g transform="matrix(1, 0, 0, 1, 253.82, -69.86)" filter="url(#Rectangle_287)">
                                    <rect id="Rectangle_287-2" data-name="Rectangle 287" width="305" height="630" rx="36" transform="translate(159.18 136.86)" fill="#fff"/>
                                  </g>
                                  <g id="Group_497" data-name="Group 497">
                                    <g id="iPhone_Front" data-name="iPhone Front" transform="translate(348 -11)">
                                      <path id="Path_582" data-name="Path 582" d="M92.452,25A47.452,47.452,0,0,0,45,72.452v607.38a47.452,47.452,0,0,0,47.452,47.452H348.69a47.452,47.452,0,0,0,47.452-47.452V72.452A47.452,47.452,0,0,0,348.69,25Zm0,5.694A41.757,41.757,0,0,0,50.694,72.452v607.38a41.757,41.757,0,0,0,41.757,41.757H348.69a41.757,41.757,0,0,0,41.757-41.757V72.452A41.757,41.757,0,0,0,348.69,30.694Z" transform="translate(-0.255)" fill="#fff" stroke="#707070" stroke-width="0.1" fill-rule="evenodd"/>
                                      <path id="Path_583" data-name="Path 583" d="M40,116.9a1.9,1.9,0,0,1,1.9-1.9h1.9v23.726H41.9a1.9,1.9,0,0,1-1.9-1.9Z" transform="translate(0 -4.587)" fill="#fff" stroke="#707070" stroke-width="0.1"/>
                                      <path id="Path_584" data-name="Path 584" d="M40,166.9a1.9,1.9,0,0,1,1.9-1.9h1.9v43.655H41.9a1.9,1.9,0,0,1-1.9-1.9Z" transform="translate(0 -7.136)" fill="#fff" stroke="#707070" stroke-width="0.1" fill-rule="evenodd"/>
                                      <path id="Path_585" data-name="Path 585" d="M40,226.9a1.9,1.9,0,0,1,1.9-1.9h1.9v43.655H41.9a1.9,1.9,0,0,1-1.9-1.9Z" transform="translate(0 -10.194)" fill="#fff" stroke="#707070" stroke-width="0.1"/>
                                      <path id="Path_586" data-name="Path 586" d="M419.8,182.9a1.9,1.9,0,0,0-1.9-1.9H416v72.126h1.9a1.9,1.9,0,0,0,1.9-1.9Z" transform="translate(-19.164 -7.951)" fill="#fff" stroke="#707070" stroke-width="0.1" fill-rule="evenodd"/>
                                      <circle id="Ellipse_19" data-name="Ellipse 19" cx="4.5" cy="4.5" r="4.5" transform="translate(188.632 48.283)" fill="#e3e3e3"/>
                                      <circle id="Ellipse_20" data-name="Ellipse 20" cx="3.559" cy="3.559" r="3.559" transform="translate(189.71 49.438)" fill="#fff" stroke="#707070" stroke-width="0.1"/>
                                      <path id="Path_587" data-name="Path 587" d="M220,54.847A2.847,2.847,0,0,1,222.847,52h32.267a2.847,2.847,0,0,1,2.847,2.847h0a2.847,2.847,0,0,1-2.847,2.847H222.847A2.847,2.847,0,0,1,220,54.847Z" transform="translate(-9.174 -1.376)" fill="#fff" stroke="#707070" stroke-width="0.1" fill-rule="evenodd"/>
                                      <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
                                        <g id="temp" transform="translate(-354.368 11.142)" stroke="#707070" stroke-width="0.2" fill="url(#pattern)">
                                          <rect width="1136" height="730" rx="10" stroke="none"/>
                                          <rect x="0.1" y="0.1" width="1135.8" height="729.8" rx="9.9" fill="none"/>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g id="Group_499" data-name="Group 499" transform="translate(-6)">
                                    <rect id="Agora-new-logo-rgb" width="62" height="21" transform="translate(544 167)" fill="url(#pattern-2)"/>
                                    <text id="Together_Business" data-name="Together Business" transform="translate(570 255)" fill=${
                                      state.primaryFontColor
                                    } font-size="23" font-family="Roboto-Bold, Roboto" font-weight="700" dominant-baseline="middle" text-anchor="middle">${
                          state.HEADING
                        }</text>
                                    <foreignObject width="280" height="200" style="transform: translate(433px, 254px)"
                                      requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                                        <p style="text-align: center;font-size: 14px;line-height: 14px; margin-top:17px; color: ${
                                          state.primaryFontColor
                                        }" xmlns="http://www.w3.org/1999/xhtml">${
                          state.SUBHEADING
                        }</p>
                                    </foreignObject>
                                    <g id="Group_494" data-name="Group 494" transform="translate(430.686 432)">
                                      <rect id="Rectangle_279" data-name="Rectangle 279" width="287" height="35" rx="17.5" transform="translate(0.314 0)" fill="${
                                        state.primaryColor
                                      }"/>
                                      <text id="Create_Meeting" data-name="Create Meeting" transform="translate(141.314 22)" fill="#fff" font-size="12" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="-41.159" y="0">Create Meeting</tspan></text>
                                    </g>
                                    <g id="Group_493" data-name="Group 493" transform="translate(430.686 527)">
                                      <g id="Rectangle_280" fill-opacity="0" data-name="Rectangle 280" transform="translate(0.314 0)" stroke="${
                                        state.primaryColor
                                      }" stroke-width="0.5">
                                        <rect width="287" height="35" rx="17.5" stroke="none"/>
                                        <rect x="0.25" y="0.25" width="286.5" height="34.5" rx="17.25" fill="none"/>
                                      </g>
                                      <text id="Meeting_ID_or_URL" data-name="Meeting ID or URL" transform="translate(138.314 22)" fill="${
                                        state.primaryColor
                                      }" font-size="12" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="-48.48" y="0">Meeting ID or URL</tspan></text>
                                    </g>
                                    <g id="Group_492" data-name="Group 492" transform="translate(479.538 373)">
                                      <text id="Use_PSTN_Join_by_dialing_a_number_" data-name="Use PSTN (Join by dialing a number)" transform="translate(21.462 33)" fill=${
                                        state.primaryFontColor
                                      } font-size="9" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">Use PSTN (Join by dialing a number)</tspan></text>
                                      <g id="Group_491" data-name="Group 491" transform="translate(0)">
                                        <text id="Restrict_Host_Controls_Separate_host_link_" data-name="Restrict Host Controls (Separate host link)" transform="translate(21.462 9)" fill=${
                                          state.primaryFontColor
                                        } font-size="9" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">Restrict Host Controls (Separate host link)</tspan></text>
                                        <g id="Rectangle_281" fill-opacity="0" data-name="Rectangle 281" transform="translate(0.462 -2)" stroke="#b9b2b2" stroke-width="1">
                                          <rect width="15" height="15" rx="6" stroke="none"/>
                                          <rect x="0.5" y="0.5" width="14" height="14" rx="5.5" fill="none"/>
                                        </g>
                                      </g>
                                      <g id="Rectangle_284" fill-opacity="0" data-name="Rectangle 284" transform="translate(0.462 22)" stroke="#b9b2b2" stroke-width="1">
                                        <rect width="15" height="15" rx="6" stroke="none"/>
                                        <rect x="0.5" y="0.5" width="14" height="14" rx="5.5" fill="none"/>
                                      </g>
                                    </g>
                                    <g id="Group_495" data-name="Group 495" transform="translate(430.686 318)">
                                      <g id="Component_2_5" fill-opacity="0" data-name="Component 2 – 5" transform="translate(0.314 0)">
                                        <g id="Rectangle_278" data-name="Rectangle 278" transform="translate(0 0)" stroke=${
                                          state.primaryColor
                                        } stroke-width="0.5">
                                          <rect width="288" height="36" rx="18" stroke="none"/>
                                          <rect x="0.25" y="0.25" width="287.5" height="35.5" rx="17.75" fill="none"/>
                                          </g></g>
                                          <text id="Create_Meeting" data-name="Create Meeting" transform="translate(141.314 20)" fill=${
                                            state.primaryFontColor
                                          } font-size="12" font-family="Roboto-Medium, Roboto" font-weight="500" dominant-baseline="middle" text-anchor="middle">ACME Meeting</text>
                            `,
                      }}
                    />
                  </TabPanel>
                ))}

                {[7].map((e) => (
                  <TabPanel padding={0} value={value} index={e} key={e}>
                    <div
                      style={{
                        display: 'grid',
                        placeContent: 'center',
                        margin: -40,
                      }}>
                      <VideocallMobile
                        bg={state.bg}
                        defaultbg="./transparent.png"
                        primaryColor={state.primaryColor}
                        primaryFontColor={state.primaryFontColor}
                        secondaryFontColor={state.secondaryFontColor}
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanel>
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
              sm={8}
              md={9}
              style={{display: 'grid', placeItems: 'center'}}
              className={ContentClasses.NavContainer}>
              <CircularProgress color="primary" />
            </Grid>
          )}
        </Grid>
      </div>
      <Backdrop className={BackDropStyle.backdrop} open={false}>
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
      <Snackbar
        open={validationError}
        anchorOrigin={{vertical, horizontal}}
        autoHideDuration={10000}
        onClose={() => {
          setValidationError(false);
        }}>
        <Alert
          classes={{
            filledError: BackDropStyle.filledErrorCustom,
            action: BackDropStyle.closeIconError,
          }}
          onClose={() => {
            setValidationError(false);
          }}
          severity="error">
          Error in Following Field : <br />
          {errorHandler.ProductInformation.ProductName ? (
            <div>{errorHandler.ProductInformation.ProductName} ,</div>
          ) : (
            ''
          )}
          {errorHandler.ProductInformation.ProductId &&
          errorHandler.ProductInformation.ProductId.includes('reserved') ? (
            <div>
              <a
                style={{textDecoration: 'underline', color: '#fff'}}
                href="https://www.google.com/"
                target="_blank">
                {state.Product_id}
              </a>
              <span> is reserved please try using another keyword ,</span>
            </div>
          ) : errorHandler.ProductInformation.ProductId ? (
            <div>{errorHandler.ProductInformation.ProductId} ,</div>
          ) : (
            ''
          )}
          {errorHandler.ProductInformation.ProductDesc ? (
            <div>{errorHandler.ProductInformation.ProductDesc} ,</div>
          ) : (
            ''
          )}
          {errorHandler.AgoraConfiguration.AgoraID ? (
            <div>{errorHandler.AgoraConfiguration.AgoraID} ,</div>
          ) : (
            ''
          )}
          {errorHandler.AgoraConfiguration.AgoraCertificate ? (
            <div>{errorHandler.AgoraConfiguration.AgoraCertificate} ,</div>
          ) : (
            ''
          )}
          {errorHandler.JoinScreen.ClientID ? (
            <div> {errorHandler.JoinScreen.ClientID} ,</div>
          ) : (
            ''
          )}
          {errorHandler.JoinScreen.ClientSecret ? (
            <div> {errorHandler.JoinScreen.ClientSecret} ,</div>
          ) : (
            ''
          )}
          {errorHandler.ConferencingScreen.PSTN.TEmail ? (
            <div>{errorHandler.ConferencingScreen.PSTN.TEmail} ,</div>
          ) : (
            ''
          )}
          {errorHandler.ConferencingScreen.PSTN.TPassword ? (
            <div> {errorHandler.ConferencingScreen.PSTN.TPassword} ,</div>
          ) : (
            ''
          )}
          {errorHandler.ConferencingScreen.Cloud.CustomerID ? (
            <div> {errorHandler.ConferencingScreen.Cloud.CustomerID} ,</div>
          ) : (
            ''
          )}
          {errorHandler.ConferencingScreen.Cloud.CustomerCertificate ? (
            <div>
              {errorHandler.ConferencingScreen.Cloud.CustomerCertificate} ,
            </div>
          ) : (
            ''
          )}
          {errorHandler.ConferencingScreen.Cloud.BucketName ? (
            <div>{errorHandler.ConferencingScreen.Cloud.BucketName} ,</div>
          ) : (
            ''
          )}
          {errorHandler.ConferencingScreen.Cloud.BucketAccessKey ? (
            <div>{errorHandler.ConferencingScreen.Cloud.BucketAccessKey} ,</div>
          ) : (
            ''
          )}
          {errorHandler.ConferencingScreen.Cloud.BucketAccessSecret ? (
            <div>
              {errorHandler.ConferencingScreen.Cloud.BucketAccessSecret} .
            </div>
          ) : (
            ''
          )}
        </Alert>
      </Snackbar>
    </div>
  );
}

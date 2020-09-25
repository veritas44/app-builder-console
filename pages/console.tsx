import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Grid,
  makeStyles,
  createStyles,
  Theme,
  FormControlLabel,
  Checkbox,
  Tab,
  Tabs,
  TextField,
  Link,
  InputLabel,
} from '@material-ui/core';
// import ProTip from '../components/ProTip';
// import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Header from '../components/Header';
import Download from '../components/Download';
import Upload from '../components/Upload';
import {ColorPicker, Color as ColorType} from 'material-ui-color';
import {debounce} from 'ts-debounce';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface ConfigInterface {
  projectName: string;
  displayName: string;
  logoRect: string;
  logoSquare: string;
  AppID: string;
  primaryColor: string;
  frontEndURL: string;
  backEndURL: string;
  pstn: false;
  precall: false;
  watermark: false;
  chat: false;
  cloudRecording: false;
  screenSharing: false;
  platformIos: false;
  platformAndroid: false;
  platformWeb: false;
  platformWindows: false;
  platformMac: false;
  platformLinux: false;
  APP_CERTIFICATE: string;
  CUSTOMER_ID: string;
  CUSTOMER_CERTIFICATE: string;
  BUCKET_NAME: string;
  BUCKET_ACCESS_KEY: string;
  BUCKET_ACCESS_SECRET: string;
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URL: string;
  PSTN_USERNAME: string;
  PSTN_PASSWORD: string;
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

interface FormProps {
  label: string;
  name: keyof ConfigInterface;
  state: string | boolean;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FormState = ConfigInterface;

function Check(props: FormProps) {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.checkbox}
      control={
        <Checkbox
          name={props.name}
          color="primary"
          checked={props.state as boolean}
          onChange={props.handler}
        />
      }
      label={props.label}
    />
  );
}

function Text(props: FormProps) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      label={props.label}
      value={props.state as string}
      name={props.name}
      onChange={props.handler}
      variant="outlined"
      color="primary"
  //     inputProps={{
  //       style: {
  //         padding: 10,
  //         margin: 0,
  //       },
  //    }}
  //    InputLabelProps={{
  //     style: {
  //       transform: 'translate(14px, 12px) scale(1)',
  //     },
  //  }}
    />
  );
}

interface ColorProps extends FormProps {
  colorHandler: (color: string, name: string) => void;
}

function Color(props: ColorProps) {
  const handleChange = debounce(
    (colorValue: ColorType) => {
      requestAnimationFrame(() => {
        props.colorHandler('#' + colorValue.hex, props.name);
      });
    },
    20,
    {isImmediate: true},
  );
  return (
    <>
      <Grid container spacing={1} alignItems="center">
        <Grid xs={1} item>
          <ColorPicker
            disableTextfield
            hideTextfield
            disableAlpha
            onChange={handleChange}
            value={props.state as string}
          />
        </Grid>
        <Grid xs={11} item>
          <Text
            name={props.name}
            state={props.state}
            handler={props.handler}
            label={props.label}
          />
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      minHeight: '60vh',
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderColor: '#099DFD10',
      // boxShadow: '0px 0px 4px 0px #099DFD80',
      boxShadow: '-1px 4px 19px 0px rgba(26, 134, 192, 0.16)',
    },
    // paperBlue: {
    //   minHeight: '60vh',
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    //   boxShadow: '0px 0px 4px 2px #099DFD80',
    // },
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
    },
    checkbox: {
      flex: 1,
      display: 'flex',
      margin: theme.spacing(2),
    },
    textField: {
      flex: 1,
      display: 'flex',
      margin: theme.spacing(1.5),
      borderColor: '#099DFD80', //edit
    },
    tabs: {
      borderRight: `0px solid ${theme.palette.divider}`,
    },
    alignCenter: {
      marginTop: 20,
      alignSelf: 'center',
      justifySelf: 'center',
      textAlign: 'center',
    },
  }),
);
export type LogoType = 'logoRect' | 'logoSquare';
export type LogoStateType = File | null;
export interface LogoHandleInterface {}

export default function Index() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState<FormState>({
    projectName: '',
    displayName: '',
    logoRect: '',
    logoSquare: '',
    AppID: '',
    primaryColor: '#099DFD',
    frontEndURL: '',
    backEndURL: '',
    pstn: false,
    precall: false,
    watermark: false,
    chat: false,
    cloudRecording: false,
    screenSharing: false,
    platformIos: false,
    platformAndroid: false,
    platformWeb: false,
    platformWindows: false,
    platformMac: false,
    platformLinux: false,
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
  });

  const [squareLogo, setSquareLogo] = React.useState<LogoStateType>(null);
  const [rectLogo, setRectLogo] = React.useState<LogoStateType>(null);

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let dependentUpdates = {};
    if (
      event.target.name === 'cloudRecording' &&
      event.target.checked === false
    ) {
      dependentUpdates = {
        BUCKET_NAME: '',
        BUCKET_ACCESS_KEY: '',
        BUCKET_ACCESS_SECRET: '',
      };
    }
    if (event.target.name === 'pstn' && event.target.checked === false) {
      dependentUpdates = {
        PSTN_USERNAME: '',
        PSTN_PASSWORD: '',
      };
    }
    setState({
      ...state,
      [event.target.name]: event.target.checked,
      ...dependentUpdates,
    });
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.value});
  };
  const handleColorChange = (color: string, name: string) => {
    setState({...state, [name]: color});
  };

  const handleUpload = (file: LogoStateType, name: LogoType) => {
    if (name === 'logoSquare') {
      setSquareLogo(file);
    } else if (name === 'logoRect') {
      setRectLogo(file);
    }
    setState({
      ...state,
      [name]: file !== null ? `${name}.${file.name.split('.').pop()}` : '',
    });
    console.log('handle upload');
  };

  return (
    <>
      {/* <Header /> */}
      <div className={classes.root}>
        <Box my={4} className={classes.row}>
          <Typography
            variant="h4"
            component="h1"
            align="right"
            style={{marginLeft: 32}}>
            Console
          </Typography>
          <Link
            href="/"
            style={{marginLeft: 'auto', marginRight: 32}}
            className={classes.row}>
            <img className={classes.logo} src="/logo.png" />
            <Typography
              variant="h4"
              component="h1"
              style={{textDecoration: 'none !important'}}>
              App Builder
            </Typography>
          </Link>
        </Box>
        <div>
          <Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={2}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                  indicatorColor="primary">
                  <Tab label="General" {...a11yProps(0)} />
                  <Tab label="Agora Config" {...a11yProps(1)} />
                  <Tab label="Video Call" {...a11yProps(2)} />
                  <Tab label="Platforms" {...a11yProps(3)} />
                </Tabs>
                <div className={classes.alignCenter}>
                  <Download
                    configData={state}
                    logoSquare={squareLogo}
                    logoRect={rectLogo}
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <Paper variant="outlined" className={classes.paper}>
                  <TabPanel value={value} index={0}>
                    <Text
                      name={'projectName'}
                      state={state.projectName}
                      handler={handleValueChange}
                      label={'Project Name'}
                    />
                    <Text
                      name={'displayName'}
                      state={state.displayName}
                      handler={handleValueChange}
                      label={'Display Name'}
                    />
                    <Upload
                      label={'Square Logo'}
                      file={squareLogo}
                      handler={handleUpload}
                      name={'logoSquare'}
                    />
                    <Upload
                      label={'Rectangle Logo'}
                      file={rectLogo}
                      handler={handleUpload}
                      name={'logoRect'}
                    />
                    <Color
                      name={'primaryColor'}
                      state={state.primaryColor}
                      handler={handleValueChange}
                      colorHandler={handleColorChange}
                      label={'Primary color'}
                    />
                    <Text
                      name={'frontEndURL'}
                      state={state.frontEndURL}
                      handler={handleValueChange}
                      label={'Front-end URL'}
                    />
                    <Text
                      name={'backEndURL'}
                      state={state.backEndURL}
                      handler={handleValueChange}
                      label={'Back-end URL'}
                    />
                    <Text
                      name={'CLIENT_ID'}
                      state={state.CLIENT_ID}
                      handler={handleValueChange}
                      label={'Google oauth client ID'}
                    />
                    <Text
                      name={'CLIENT_SECRET'}
                      state={state.CLIENT_SECRET}
                      handler={handleValueChange}
                      label={'Google oauth client secret'}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Text
                      name={'AppID'}
                      state={state.AppID}
                      handler={handleValueChange}
                      label={'Agora App ID'}
                    />
                    <Text
                      name={'APP_CERTIFICATE'}
                      state={state.APP_CERTIFICATE}
                      handler={handleValueChange}
                      label={'Agora App Certificate'}
                    />
                    <Text
                      name={'CUSTOMER_ID'}
                      state={state.CUSTOMER_ID}
                      handler={handleValueChange}
                      label={'Agora Customer ID'}
                    />
                    <Text
                      name={'CUSTOMER_CERTIFICATE'}
                      state={state.CUSTOMER_CERTIFICATE}
                      handler={handleValueChange}
                      label={'Agora Customer Certificate'}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Check
                      name={'pstn'}
                      state={state.pstn}
                      handler={handleCheckChange}
                      label={'PSTN dial-in'}
                    />
                    <div style={state.pstn ? {} : {display: 'none'}}>
                      <Text
                        name={'PSTN_USERNAME'}
                        state={state.PSTN_USERNAME}
                        handler={handleValueChange}
                        label={'Turbobridge username'}
                      />
                      <Text
                        name={'PSTN_PASSWORD'}
                        state={state.PSTN_PASSWORD}
                        handler={handleValueChange}
                        label={'Turbobridge password'}
                      />
                    </div>
                    <Check
                      name={'precall'}
                      state={state.precall}
                      handler={handleCheckChange}
                      label={'Precall screen'}
                    />
                    {/* <Check
                      name={'watermark'}
                      state={state.watermark}
                      handler={handleCheckChange}
                      label={'Watermark'}
                    /> */}
                    <Check
                      name={'chat'}
                      state={state.chat}
                      handler={handleCheckChange}
                      label={'Chat'}
                    />
                    <Check
                      name={'cloudRecording'}
                      state={state.cloudRecording}
                      handler={handleCheckChange}
                      label={'Cloud Recording'}
                    />
                    <div style={state.cloudRecording ? {} : {display: 'none'}}>
                      <Text
                        name={'BUCKET_NAME'}
                        state={state.BUCKET_NAME}
                        handler={handleValueChange}
                        label={'AWS S3 Bucket Name'}
                      />
                      <Text
                        name={'BUCKET_ACCESS_KEY'}
                        state={state.BUCKET_ACCESS_KEY}
                        handler={handleValueChange}
                        label={'AWS S3 Bucket Access Key'}
                      />
                      <Text
                        name={'BUCKET_ACCESS_SECRET'}
                        state={state.BUCKET_ACCESS_SECRET}
                        handler={handleValueChange}
                        label={'AWS S3 Bucket Access Secret'}
                      />
                    </div>

                    <Check
                      name={'screenSharing'}
                      state={state.screenSharing}
                      handler={handleCheckChange}
                      label={'Screen sharing'}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Check
                      name={'platformIos'}
                      state={state.platformIos}
                      handler={handleCheckChange}
                      label={'IOS'}
                    />
                    <Check
                      name={'platformAndroid'}
                      state={state.platformAndroid}
                      handler={handleCheckChange}
                      label={'Android'}
                    />
                    <Check
                      name={'platformWeb'}
                      state={state.platformWeb}
                      handler={handleCheckChange}
                      label={'Web'}
                    />
                    <Check
                      name={'platformWindows'}
                      state={state.platformWindows}
                      handler={handleCheckChange}
                      label={'Windows'}
                    />
                    <Check
                      name={'platformMac'}
                      state={state.platformMac}
                      handler={handleCheckChange}
                      label={'Mac'}
                    />
                    <Check
                      name={'platformLinux'}
                      state={state.platformLinux}
                      handler={handleCheckChange}
                      label={'Linux'}
                    />
                  </TabPanel>
                </Paper>
              </Grid>
              <Grid item xs={7}>
                <Paper variant="outlined" className={classes.paper}>
                  {/* <TabPanel value={value} index={0}>
                    <pre style={{textAlign: 'left'}}>
                      {JSON.stringify(state, null, 2)}
                    </pre>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <pre style={{textAlign: 'left'}}>
                      {JSON.stringify(state, null, 2)}
                    </pre>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <pre style={{textAlign: 'left'}}>
                      {JSON.stringify(state, null, 2)}
                    </pre>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <pre style={{textAlign: 'left'}}>
                      {JSON.stringify(state, null, 2)}
                    </pre>
                  </TabPanel> */}
                  <div style={{backgroundImage: `url('./screen.png')`, height: 490,  width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Copyright />
      </div>
    </>
  );
}

import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {useRouter} from 'next/router';
import {theme, defaultLogo} from '../Theme/themeOption';
import {
  FormControl,
  Select,
  Button,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import Link from '../components/Link';
import { createProjectData  } from '../config/PerformAPI';

const defaultProjectConfig: any = {
    id: '',
    Product_id: '',
    ownerId: 1,
    projectName: '',
    displayName: '',
    logoRect: defaultLogo,
    logoSquare: '',
    bg: theme['pallete-0']['bg'],
    AppID: '',
    sentry_dsn:
    'https://b5df0450fe284baa8376e62ace331580@o615358.ingest.sentry.io/5749898',
    primaryColor: '#00AEFC',
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
    SUBHEADING:
    'The Real-Time Engagement Platform for meaningful human connections.',
    encryption: false,
    ENABLE_GOOGLE_OAUTH: false,
    ENABLE_MICROSOFT_OAUTH: false,
    ENABLE_SLACK_OAUTH: false,
    ENABLE_APPLE_OAUTH: false,
    RECORDING_REGION: '0',
    app_backend_deploy_status: '',
    app_backend_url: '',
    app_backend_deploy_msg: '',
};

const useBackDropStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#099DFD',
    },
}));
  
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
      marginTop: '0px',
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

const template: string[] = [
    'Education - Coming Soon',
    'Virtual Event - Coming Later',
    'Watch Party - Coming Later',
];

interface IProjectModal {
    setLoading: (loading: boolean) => void;
    setAPIError: (error: string) => void;
    handleClose: () => void;
    isOpen: boolean;
    loading: boolean;
}
const NewProjectModal = ({ setLoading, setAPIError, handleClose, isOpen, loading } : IProjectModal) => {
    const router = useRouter();
    const DialogClasses = useDialogStyles();
    const BackDropStyle = useBackDropStyles();
    const [validation, setValidation] = React.useState<boolean>(false);
    const [projectName, setProjectName] = React.useState<string>('');
    const [projectTemplate, setProjectTemplate] = React.useState<string>('Video Conferencing');
    
    const handleCreateNewProject = () => {
        if (projectName === '') {
            setValidation(true);
            return;
        }
        setLoading(true);
        if (!validation) {
            createProjectData(defaultProjectConfig, projectName)
                .then((res: any) => {
                    if (res) {
                        setAPIError('');
                        router.push(`/builder?id=${res.createProject.id}`);
                        setProjectName('')
                        setProjectTemplate('Video Conferencing')
                    }
                })
                .catch((err) => {
                    setLoading(false);
                    setAPIError(err.toString());
                    handleClose();
                });
        }
    }
    return (
        <Dialog onClose={handleClose} open={isOpen} maxWidth="lg">
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
                value={projectName}
                onChange={(event) => {
                    setProjectName(event.target.value);
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
                Project Template
                </Box>
                <FormControl
                variant="outlined"
                className={DialogClasses.formControl}>
                <Select
                    native
                    onChange={(event) => {
                        if(typeof event.target.value === 'string'){
                            setProjectTemplate(event.target.value)
                        }
                    }}
                    value={projectTemplate}
                    name='Project_Template'>
                    <option value='Video Conferencing'>Video Meetings</option>
                    {template.map((value, index) => (
                    <option value={value} key={index} disabled>
                        {value}
                    </option>
                    ))}
                </Select>
                </FormControl>
          </Box>
          <p>
            By creating a project you are agreeing to the{' '}
            <Link style={{color: '#079dfd'}} href={'/license'}>
              {' '}
              terms and conditions
            </Link>
          </p>
          <Button
            variant="contained"
            color="primary"
            className={DialogClasses.nextButton}
            disableElevation
            onClick={handleCreateNewProject}>
            <Box fontSize={16}>Next</Box>
          </Button>
        </Box>
        <Backdrop className={BackDropStyle.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Dialog>
    )
}

export default NewProjectModal;
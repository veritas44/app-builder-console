
import React, {useContext, useEffect} from 'react';
import {
  Menu,
  Box,
  Button,
  Tooltip,
  MenuItem,
  IconButton,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import {useRouter} from 'next/router';
import {useMutation} from '@apollo/client';
import {updateProjectMutation} from '../graphql/mutations';
import ApiStatusContext from './APIContext';
// import { InfoIcon, MenuIcon } from '@material-ui/icons'
// import Download from '../components/Download';
import {
  useProductInfo,
  updateProductInfo,
  productInfoUpdateComplete,
  productInfoUpdateInProgress,
} from './ProductInfoContext';

interface IProjectBuilderControls {
  saveBtnText: String;
  isFirstSaveBeforeAnyChange: boolean;
  setSaveBeforeExitPrompt: (isSave: boolean) => void;
  saveValidationMessage: string | boolean;
  disableDeploy: boolean; // is deploydisabled
  handleAppDeploy: () => void;
  configData: any;
  handleProjectSave: () => void;
}
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

const AppBuilderDesktopControls = ({
  saveBtnText,
  isFirstSaveBeforeAnyChange,
  setSaveBeforeExitPrompt,
  saveValidationMessage,
  disableDeploy, // is deploydisabled
  handleAppDeploy,
  configData,
  handleProjectSave,
}: IProjectBuilderControls) => {
  const classes = useStyles();
  const router = useRouter();
  const {
    status,
    error: productInfoError,
    productInfo,
    dispatch: productInfoDispatch,
  } = useProductInfo();
  const {setLoading, setAPIError} = useContext(ApiStatusContext);
  const [updateProject, {data, loading, error}] = useMutation(
    updateProjectMutation,
  );
  if (loading && status !== 'inProgress') {
    productInfoUpdateInProgress(productInfoDispatch);
    setLoading(true);
  }
  if (error) {
    setAPIError(error.message);
  }

  useEffect(() => {
    if (data) {
      setLoading(false);
      productInfoUpdateComplete(productInfoDispatch, productInfo);
    }
  }, [data]);
  const isFormValidationError = (errors: {
    isErrorInConferencingScreen: boolean;
    conferencingCred?: {pstn: {}; cloud: {}};
    isErrorInAuthCred: boolean;
    authCred?: {apple: {}; google: {}; slack: {}; microsoft: {}};
    isProductInfoError: boolean;
    productInfo?: {};
  }) => {
    return (
      errors.isProductInfoError ||
      errors.isErrorInAuthCred ||
      errors.isErrorInConferencingScreen
    );
  };
  const handleSaveProject = () => {
    let errors = validateBeforeSaving({
      dataToValidate: productInfo,
      errorObj: tempErrorObject,
    });

    if (isFormValidationError(errors)) {
      validateProductInfo(productInfoDispatch, errors);
      return;
    }

    updateProject({
      variables: {
        updated_project: productInfo,
      },
    });
  };

  return (
    <Box mx={7} className={classes.sectionDesktop}>
      <Box mx={6}>
        <Button
          variant="outlined"
          style={{borderRadius: '50px'}}
          disableRipple={true}
          onClick={() => {
            if (status === 'pending') {
              setSaveBeforeExitPrompt(true);
            } else {
              router.push('/create');
            }
          }}>
          <Box mx={18}>Close</Box>
        </Button>
      </Box>
      <Box mx={6}>
        <Button
          variant="outlined"
          color="primary"
          style={{borderRadius: '50px'}}
          onClick={handleSaveProject}
          disableRipple={true}>
          <Box mx={18} display="flex">
            <Box>
              {
                {pending: 'Save', inProgress: 'Saving', complete: 'Saved'}[
                  status
                ]
              }
            </Box>
            {status === 'pending' && saveValidationMessage && (
              <Tooltip title={saveValidationMessage}>
                <InfoIcon style={{color: '#FF8989', marginLeft: '10px'}} />
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
          disabled={isFormValidationError(productInfoError)}
          className={classes.primarybutton}
          onClick={handleAppDeploy}>
          <Box mx={9}>Deploy your App</Box>
        </Button>
      </Box>
      <Box mx={6}>
        {/* <Download
            saveBtnState={saveBtnText}
            configData={configData}
            saveBtnFn={handleProjectSave}
          /> */}
      </Box>
    </Box>
  );
};
const AppBuilderMobileControls = ({
  saveBtnText,
  isFirstSaveBeforeAnyChange,
  setSaveBeforeExitPrompt,
  saveValidationMessage,
  disableDeploy, // is deploydisabled
  handleAppDeploy,
  configData,
  handleProjectSave,
}: IProjectBuilderControls) => {
  const classes = useStyles();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
              if (
                saveBtnText !== 'saved' &&
                isFirstSaveBeforeAnyChange !== true
              ) {
                setSaveBeforeExitPrompt(true);
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
              handleProjectSave();
            }}>
            <Box mx={18} display="flex">
              <Box mr={5}>{saveBtnText}</Box>
              {saveBtnText !== 'save' && (
                <Tooltip
                  title={
                    saveBtnText === 'saved' ? 'Changes Saved' : 'Saving...'
                  }>
                  <InfoIcon
                    style={
                      saveBtnText === 'saved'
                        ? {color: '#099CFC', marginLeft: '10px'}
                        : saveBtnText === 'save'
                        ? {color: '#FF8989', marginLeft: '10px'}
                        : {color: '#FFC107', marginLeft: '10px'}
                    }
                  />
                </Tooltip>
              )}
              {saveBtnText === 'save' && saveValidationMessage && (
                <Tooltip title={saveValidationMessage}>
                  <InfoIcon style={{color: '#FF8989', marginLeft: '10px'}} />
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
            onClick={handleAppDeploy}>
            <Box>Deploy your App</Box>
          </Button>
        </MenuItem>
        <MenuItem>
          {/* <Download
              saveBtnState={saveBtnText}
              configData={configData}
              saveBtnFn={handleProjectSave}
            /> */}
        </MenuItem>
      </Menu>
    </Box>
  );
};
const AppBuilderControls = (props: IProjectBuilderControls) => {

    return (
        <>
        <AppBuilderDesktopControls {...props}/>
        <AppBuilderMobileControls {...props} />
        </>
    )
}

export default AppBuilderControls;
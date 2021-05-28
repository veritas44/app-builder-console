import React from 'react';
import {
  Box,
  makeStyles,
  createStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextTip from '../components/textTip';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import type {FormState} from '../pages/console';
import {getAgoraProjectsList} from '../config/PerformAPI';

interface ProductInfoProps {
  children?: React.ReactNode;
  onClickBack: VoidFunction;
  handleValueChange?:
    | ((
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => void)
    | any;
  value: FormState;
  errorHandler: any;
  setErrorHandler: Function;
}
export default function ProductInfo(props: ProductInfoProps) {
  const {onClickBack, handleValueChange, value, errorHandler} = props;
  const [appErr, setAppErr] = React.useState<string>('');
  const [configErr, setConfigErr] = React.useState<string>('');
  React.useEffect(() => {
    setAppErr(errorHandler.AgoraConfiguration.AgoraID);
    setConfigErr(errorHandler.AgoraConfiguration.AgoraCertificate);
  }, [errorHandler.AgoraConfiguration]);
  React.useEffect(() => {
    getAgoraProjectsList()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const useStyles = makeStyles(() =>
    createStyles({
      backBtn: {
        display: 'flex',
        marginBottom: '15px',
        cursor: 'pointer',
        width: 'fit-content',
      },
      backArrow: {
        color: '#0B9DFC',
        marginRight: '10px',
      },

      textField: {
        background: '#F1F1F1',
        borderRadius: '4px',
        display: 'flex',
        borderColor: '#099DFD80',
        marginTop: '14px',
        marginBottom: '17px',
      },
      textToTip: {
        fontWeight: 'normal',
        fontSize: '15px',
        color: '#8D959D',
        marginBottom: '35px',
      },
      headingContainer: {
        backgroundColor: '#a7cdfc',
        borderBottomRightRadius: '50px',
        borderTopRightRadius: '50px',
      },
      mainHading: {
        fontWeight: 500,
        fontSize: '19px',
        color: '#616161',
        marginBottom: '15px',
      },
    }),
  );
  const classes = useStyles();
  return (
    <>
      <Box
        px={15}
        component="div"
        className={classes.backBtn}
        onClick={onClickBack}>
        <ArrowBackIcon className={classes.backArrow} />
        <Box component="span">Back</Box>
      </Box>
      <Box fontWeight={500} fontSize={22} mb={6} pl={15}>
        General
      </Box>
      <Box pl={15} mr={15} className={classes.headingContainer}>
        <Typography
          variant="caption"
          className={classes.mainHading}
          component="h1">
          Agora Configuration
        </Typography>
      </Box>
      <Box px={15}>
        <TextTip
          name={'Agora App ID'}
          tip={'An Agora App ID, can be obatained from console.agora.io'}
        />
        {/* <TextField
          error={appErr && appErr.length > 0 ? true : false}
          className={classes.textField}
          label="App ID"
          name="AppID"
          value={value.AppID}
          variant="outlined"
          onChange={(e: any) => {
            handleValueChange(e);
          }}
          helperText={appErr}
        /> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value.AppID}
          onChange={handleValueChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <TextTip
          name={'Agora App Certificate'}
          tip={
            'App Certificate is used by Agora to generate tokens for security.'
          }
        />
        {/* <TextField
          error={configErr && configErr.length > 0 ? true : false}
          className={classes.textField}
          label="Agora App Certificate"
          name="APP_CERTIFICATE"
          variant="outlined"
          value={value.APP_CERTIFICATE}
          onChange={(e: any) => {
            handleValueChange(e);
          }}
          helperText={configErr}
        /> */}
                <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value.APP_CERTIFICATE}
          onChange={handleValueChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

      </Box>
    </>
  );
}

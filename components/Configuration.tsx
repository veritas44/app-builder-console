import React from 'react';
import {Box, TextField, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextTip from '../components/textTip';
import type {FormState} from '../pages/console';
import {ProductInfoStyles} from '../styles/ConfigurationStyles';
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

  const classes = ProductInfoStyles();
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
        <TextField
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
        />
        <TextTip
          name={'Agora App Certificate'}
          tip={
            'App Certificate is used by Agora to generate tokens for security.'
          }
        />
        <TextField
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
        />
      </Box>
    </>
  );
}

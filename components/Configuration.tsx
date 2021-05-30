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
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useRouter} from 'next/router';
import type {FormState} from '../pages/console';
import {getAgoraProjectsList} from '../config/PerformAPI';

interface ProductInfoProps {
  children?: React.ReactNode;
  onClickBack: VoidFunction;
  handleValueChange?:
    | ((
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any,
      ) => void)
    | any;
  value: FormState;
  handleConfigurationChange:any;
  errorHandler: any;
  setErrorHandler: Function;
}
interface AgoraProject {
  app_id: string;
  app_secret: string;
  project_name: string;
  vendor_id: number | null;
}
export default function ProductInfo(props: ProductInfoProps) {
  const {onClickBack,value,handleConfigurationChange} = props;
  const router = useRouter();
  const [agoraApps, setAgoraApps] = React.useState<AgoraProject[]>([]);
  const [inputValue, setInputValue] = React.useState<AgoraProject>({
    app_id: '',
    app_secret: '',
    project_name: '',
    vendor_id: null,
  });
  React.useEffect(()=>{
    setInputValue({
      ...inputValue,
      app_id: value.AppID,
      app_secret: value.APP_CERTIFICATE,
    })
  },[value])
  React.useEffect(() => {
    getAgoraProjectsList()
      .then((res) => {
        const {
          query: {id},
        } = router;
        if (res.length > 0) {
          setAgoraApps(res);
          console.log(res);
          const currentAgoraAPP = res.filter(
            (data) => data.project_name === id,
          );
          console.log(currentAgoraAPP, res);
          setInputValue(currentAgoraAPP[0] || {});
          handleConfigurationChange({
            AppID: currentAgoraAPP[0].app_id,
            APP_CERTIFICATE: currentAgoraAPP[0].app_secret,
          })
        }
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
      loading: {
        display: 'flex',
        color: '#0B9DFC',
        marginTop: '14px',
        marginBottom: '17px',
        marginLeft: '30px',
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
      {agoraApps.length ? (
        <Box px={15}>
          <Autocomplete
            options={agoraApps}
            id="controlled-demo"
            value={inputValue}
            disableClearable
            getOptionLabel={(option) => {
              return option.project_name;
            }}
            onChange={(_event, newValue) => {
              if (newValue !== null) {
                handleConfigurationChange({
                  AppID: newValue.app_id,
                  APP_CERTIFICATE: newValue.app_secret
                })
              }
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Agora App" margin="normal" />
            )}
          />
          <TextTip
            name={'Agora App ID'}
            tip={'An Agora App ID, can also be obatained from console.agora.io'}
          />
          <TextField
            className={classes.textField}
            label="App ID"
            name="AppID"
            value={inputValue.app_id || ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextTip
            name={'Agora App Certificate'}
            tip={
              'App Certificate is used by Agora to generate tokens for security.'
            }
          />
          <TextField
            className={classes.textField}
            label="Agora App Certificate"
            name="APP_CERTIFICATE"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
            value={inputValue.app_secret || ''}
          />
        </Box>
      ) : (
        <Typography variant="caption" className={classes.loading} component="p">
          Fetching AGORA Apps....
        </Typography>
      )}
    </>
  );
}

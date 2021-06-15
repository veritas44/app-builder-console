import {createStyles, makeStyles} from '@material-ui/core';

export const DeployStyles = makeStyles(() =>
  createStyles({
    Container: {
      margin: '20px',
      display: 'flex',
      ['@media (max-width:830px)']: {
        flexDirection: 'column',
      },
    },
    CardContainer: {
      width: '280px',
      margin: '13px',
      paddingBottom: 0,
      position: 'relative',
    },
    Typography: {
      fontFamily: 'acumin-pro, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '13px',
      color: '#0A9DFC',
    },
    Typography2: {
      fontFamily: 'acumin-pro, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '15px',
      color: '#0A9DFC',
      marginBottom: '5px',
    },
    Typography3: {
      textAlign: 'center',
      fontFamily: 'acumin-pro, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '18px',
      // marginRight: '15px',
      // marginLeft: '15px',
      color: '#434343',
      marginBottom: '-8px',
    },
    primaryButton: {
      color: '#fff',
      width: '100%',
      margin: '30px 0',
      borderRadius: '50px',
    },
    Hading: {
      textAlign: 'center',
      fontFamily: 'acumin-pro, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#000000',
      marginBottom: '0px',
    },
    Close: {
      marginLeft: 'auto',
      marginTop: '24px',
      marginRight: '24px',
      cursor: 'pointer',
    },
    paper: {
      width: '100%',
      height: '75%',
    },
    sucesss: {
      color: 'red',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      padding: '8px',

      top: '10px',
      left: '10px',
      borderRadius: '10px',
    },
    sucesssText: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      color: '#FFFFFF',
      marginLeft: '8px',
      marginBottom: '0px',
    },
  }),
);

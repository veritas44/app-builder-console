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
      marginBottom: '15px',
    },
    Typography3: {
      fontFamily: 'acumin-pro, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '15px',
      color: '#434343',
      marginBottom: '40px',
    },
    primaryButton: {
      color: '#fff',
      width: '100%',
      marginBottom: '10px',
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

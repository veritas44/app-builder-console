import {createStyles, makeStyles} from '@material-ui/core';

export const ProductInfoStyles = makeStyles(() =>
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

    uploadBox: {
      marginTop: '15px',
      marginBottom: '25px',
    },
    SwitchText: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '15px',
      color: '#394A64',
      marginRight: '12px',
    },
    SwitchContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      marginBottom: '27px',
    },
    Setting: {
      marginRight: 'auto',
    },
    TurboUser: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '15px',
      color: '#394A64',
      marginBottom: '15px',
    },
    textField: {
      background: '#F1F1F1',
      borderRadius: '4px',
      display: 'flex',
      borderColor: '#099DFD80',
      marginTop: '14px',
      marginBottom: '17px',
    },
    pstnText: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '15px',
      color: '#8D959D',
      marginBottom: '15px',
    },
  }),
);

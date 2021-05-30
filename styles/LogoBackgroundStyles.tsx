import {createStyles, makeStyles} from '@material-ui/core';

export const LogoBackgroundStyles = makeStyles(() =>
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
    },
    Text: {
      fontWeight: 'normal',
      fontSize: ' 18px',
      color: '#222222',
      marginBottom: '16px',
      marginTop: '15px',
    },
    uploadBox: {
      marginTop: '15px',
      marginBottom: '25px',
    },
    drawerWidth: {
      width: '50%',
      ['@media (min-width:780px)']: {
        // eslint-disable-line no-useless-computed-key
        width: '80%',
      },
    },
  }),
);

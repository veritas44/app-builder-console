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
    hadding: {
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '22px',
      lineHeight: '20px',
      color: '#222222',
      marginBottom: '24px',
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
      marginBottom: '25px',
    },
    textarea: {
      width: '100%',
      fontSize: '15px',
      padding: '16px',
      borderRadius: '4px',
      marginTop: '14px',
      border: '1px solid #DEE5EF',
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
    validation: {
      color: '#CF4040',
      fontSize: '20px',
      fontWeight: 400,
      marginBottom: '20px',
    },
  }),
);

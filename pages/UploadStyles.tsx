import {createStyles, makeStyles} from '@material-ui/core';
import {create} from 'domain';

export const UploadStyles = makeStyles(() =>
  createStyles({
    uploadBox: {
      background: '#FFFFFF',
      border: '1px solid #DEE5EF',
      borderRadius: '4px',
      height: ' 40px',
      marginRight: '10px',
      width: '100%',
    },
    uploadBox_text: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '15px',
      color: '#8D959D',
      display: 'flex',
      alignItems: 'center',
    },
    mainHading: {
      fontWeight: 500,
      fontSize: '22px',
      color: '#222222',
      marginBottom: '24px',
    },
    Text: {
      fontWeight: 'normal',
      fontSize: ' 18px',
      color: '#222222',
      marginBottom: '16px',
    },
    uploadBtn: {
      display: 'none',
      width: '25%',
      height: '40px',
    },
  }),
);

import {createStyles, makeStyles} from '@material-ui/core';

export const textTipStyles = makeStyles(() =>
  createStyles({
    Container: {
      display: 'flex',
      alignItems: 'center',
    },
    Text: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '15px',
      color: '#394A64',
    },
    tipIcon: {
      marginLeft: 'auto',
      color: '#099CFC',
    },
    ToolTip: {
      backgroundColor: 'red',
    },
  }),
);

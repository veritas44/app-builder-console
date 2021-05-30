import {createStyles, makeStyles} from '@material-ui/core';

export const DownloadStyles = makeStyles(() =>
  createStyles({
    primarybutton: {
      borderRadius: '50px',
      color: '#fff',
      ['@media (max-width:1028px)']: {
        fontSize: '12px',
      },
    },
  }),
);

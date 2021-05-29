import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const ButtonAppBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
    },
    leftSection: {
      flex: 1,
      display: 'flex',
    },
  }),
);

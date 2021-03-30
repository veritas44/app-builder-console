import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

/*
Main Titile

Acumin Pro Wide

Style - normal

Weight - 300

Line Height - 53px

Size - 48px

Color #212121



Sub Title

Acumin Pro Wide

Style - normal

Weight - 700

Line Height -29px

Size - 22px

Color #212121



Body Copy

Acumin Pro Wide

Style - normal

Weight - 400

Line Height - 25px

Size - 16px

Color #212121
 */

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#079dfd',
    },
    secondary: {
      main: '#cdcdcd',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#079dfd',
      },
    },
    MuiButton: {
      label: {
        // color: '#fff',
      },
    },
    MuiCheckbox: {
      root: {
        color: '#079dfd',
      },
    },
    MuiBottomNavigationAction: {
      label: {
        marginTop: '5px',
      },
    },
  },
  typography: {
    fontFamily: ['acumin-pro-wide', 'sans-serif'].join(','),
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '25px',
    },
    h1: {
      fontSize: '48px',
      fontWeight: 300,
      lineHeight: '53px',
      color: '#212121',
      marginTop: '15px',
      '@media (max-width:600px)': {
        marginBottom: '2%',
        // fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '22px',
      fontWeight: 700,
      lineHeight: '29px',
      color: '#212121',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
  },
});

export default theme;

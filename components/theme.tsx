import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

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
  },
  typography: {
    h1: {
      '@media (max-width:600px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
  },
});

export default theme;

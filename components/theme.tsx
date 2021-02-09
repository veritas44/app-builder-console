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
    MuiBottomNavigationAction: {
      label: {
        marginTop: '5px',
      },
    },
  },
  typography: {
    h1: {
        fontSize: '4rem',
        marginTop: '15px',
      '@media (max-width:600px)': {
        marginBottom: '20px',
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
  },
});

export default theme;

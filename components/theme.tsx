import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  spacing: 2,
  palette: {
    primary: {
      main: '#099DFD',
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
        borderColor: '#099DFD80',
      },
    },
    MuiButton: {
      label: {
        // color: '#fff',
      },
    },
    MuiCheckbox: {
      root: {
        color: '#099DFD80',
      },
    },
  },
  typography: {
    body1: {
      fontWeight: 'normal' // or 'bold'
    },
  },


});

export default theme;

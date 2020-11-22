import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#dbe2ef',
      light: '#f9f7f7',
      text: '#ddd',
      button: '#40a8c4',
    },
    secondary: {
      main: '#3f72af',
      light: '#c4c4c4',
      button: '#f1f3f8',
    },
  },
  typography: {
    fontFamily: [
      'Heebo',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;

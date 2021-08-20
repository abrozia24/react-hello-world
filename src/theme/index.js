import createMuiTheme from '@material-ui/core/styles/createTheme';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#FFFFFF',
      main: '#53B8BB',
    },

    secondary: {
      light: '#0864ff',
      main: '#022152',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
  },
});

export default theme;

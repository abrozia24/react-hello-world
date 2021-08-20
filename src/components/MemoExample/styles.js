import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily,
    cursor: 'default',
    userSelect: 'none',
  },
  goBackContainer: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '100px',
    height: '100px',
    color: theme.palette.secondary.main,
  },
  button: {
    width: '200px',
    height: '80px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 50px',
    boxShadow: '0px 2px 8px black',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    '&:active': {
      backgroundColor: theme.palette.secondary.light,
      transform: 'translateY(0)',
    },
    transition: 'all',
    transitionDuration: '0.5s',
    marginBottom: '50px',
  },
  title: {
    fontSize: '60px',
    marginBottom: '80px',
    fontWeight: '700',
    letterSpacing: '10px',
    color: theme.palette.secondary.main,
  },
  text: {
    fontWeight: 500,
    fontSize: '25px',
    margin: '0 5px',
    color: theme.palette.secondary.main,
    marginBottom: '30px',
  },
}));

export default useStyles;

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
  },
  title: {
    fontSize: '60px',
    marginBottom: '10px',
    fontWeight: '700',
    letterSpacing: '10px',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '10px 0',
  },
}));

export default useStyles;

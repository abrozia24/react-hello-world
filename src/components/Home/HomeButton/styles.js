import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '200px',
    height: '200px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
    boxShadow: '2px 2px 8px 4px black',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    transition: 'all',
    transitionDuration: '0.7s',
  },
  iconContainer: {
    width: '50%',
    height: '50%',
    margin: '10px 5px',
    color: theme.palette.primary.light,
  },
  text: {
    fontWeight: 500,
    fontSize: '25px',
    margin: '0 5px',
    color: theme.palette.primary.light,
  },
}));

export default useStyles;

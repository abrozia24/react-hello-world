import React from 'react';
import { Route, Switch } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = React.lazy(() => import('./components/Home/Home'));
const UseStateExample = React.lazy(() =>
  import('./components/UseStateExample/UseStateExample'),
);
const MemoExample = React.lazy(() =>
  import('./components/MemoExample/MemoExample'),
);
const UseEffectExample = React.lazy(() =>
  import('./components/UseEffectExample/UseEffectExample'),
);

const HelloWorld = React.lazy(() =>
  import('./components/HelloWorld/HelloWorld'),
);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.self}>
      <React.Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/use-state" component={UseStateExample} />
          <Route exact path="/memoizing" component={MemoExample} />
          <Route exact path="/use-effect" component={UseEffectExample} />
          <Route exact path="/hello-world" component={HelloWorld} />
        </Switch>
      </React.Suspense>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  self: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
    minHeight: '100%',
    cursor: 'default',
  },
}));

export default App;

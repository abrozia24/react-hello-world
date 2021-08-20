import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useStyles from './styles';
import HomeButton from './HomeButton/HomeButton';

const Home = () => {
  const dimensions = useWindowDimensions();
  const classes = useStyles(dimensions);
  const history = useHistory();

  const handleNavigate = useCallback(
    (path) => () => {
      history.push('/' + path);
    },
    [history],
  );

  return (
    <div className={classes.container}>
      <div className={classes.title}>Demo de hooks</div>
      <div className={classes.row}>
        <HomeButton
          text={'useState'}
          handleNavigate={handleNavigate('use-state')}
        />
        <HomeButton
          text={'useCallback y useMemo'}
          handleNavigate={handleNavigate('memoizing')}
        />
      </div>
      <div className={classes.row}>
        <HomeButton
          text={'useEffect'}
          handleNavigate={handleNavigate('use-effect')}
        />
        <HomeButton
          text={'Hola Mundo'}
          handleNavigate={handleNavigate('hello-world')}
        />
      </div>
    </div>
  );
};

export default Home;

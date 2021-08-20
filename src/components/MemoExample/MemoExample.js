import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useCallback, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useStyles from './styles';
const MemoExample = () => {
  const dimensions = useWindowDimensions();

  const classes = useStyles(dimensions);

  const history = useHistory();

  const [counter, setCounter] = useState(1);
  const [memoizedCounter, setMemoizedCounter] = useState(0);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const renderMemoizedComponent = useMemo(() => {
    setMemoizedCounter(memoizedCounter + 1);
    console.log('Este console log solo se ejecuta una vez');
    return <div className={classes.text}>{'Solo me renderizo 1 vez!'}</div>;
  }, []);

  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div className={classes.container}>
      <div className={classes.goBackContainer} onClick={handleGoBack}>
        <ArrowBackIcon style={{ width: '100%', height: '100%' }} />
      </div>
      <div className={classes.title}>useCallback and useMemo hooks</div>
      <div className={classes.button} onClick={handleIncrement}>
        Apreta aca para re renderizar
      </div>
      <div className={classes.text}>
        {'El commponente se renderizo en total unas ' + counter + ' veces'}
      </div>
      <div className={classes.row}>
        {renderMemoizedComponent}
        <div className={classes.text}>
          {'El componente de arriba se renderizo ' + memoizedCounter + ' veces'}
        </div>
      </div>
      <div className={classes.text}>
        {
          'useMemo memoriza componentes, useCallback es lo mismo que useMemo pero para memorizar funciones!'
        }
      </div>
    </div>
  );
};

export default MemoExample;

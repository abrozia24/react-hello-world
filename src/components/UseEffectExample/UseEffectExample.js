import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useStyles from './styles';
const UseEffectExample = () => {
  const dimensions = useWindowDimensions();

  const classes = useStyles(dimensions);

  const history = useHistory();

  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [var3, setVar3] = useState(0);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    //esto se ejecuta en el primer render y cada vez que cambia el valor de cualquier variable del arreglo de dependencias
    alert('Se activo el useEffect!');
  }, [var1, var2]);

  return (
    <div className={classes.container}>
      <div className={classes.goBackContainer} onClick={handleGoBack}>
        <ArrowBackIcon style={{ width: '100%', height: '100%' }} />
      </div>
      <div className={classes.title}>useEffect hook</div>
      <div className={classes.text}>
        {'Solo salen alertas si apretas el boton 1 o 2 (y en el primer render)'}
      </div>
      <div onClick={() => setVar1(var1 + 1)} className={classes.button}>
        1
      </div>
      <div onClick={() => setVar2(var2 + 1)} className={classes.button}>
        2
      </div>
      <div onClick={() => setVar3(var3 + 1)} className={classes.button}>
        3
      </div>
    </div>
  );
};

export default UseEffectExample;

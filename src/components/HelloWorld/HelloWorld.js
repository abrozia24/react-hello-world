import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import client from '../../app/apiClient';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useStyles from './styles';
const HelloWorld = () => {
  const dimensions = useWindowDimensions();

  const classes = useStyles(dimensions);

  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleGetHelloWorld = useCallback(async () => {
    const response = await client.get('/hello-world');
    if (response.ok) {
      alert(response.ok);
    } else {
      alert(
        'Surgio un error revisa la variable de entorno en el .env y si tenes el backend corriendo',
      );
    }
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.goBackContainer} onClick={handleGoBack}>
        <ArrowBackIcon style={{ width: '100%', height: '100%' }} />
      </div>
      <div className={classes.title}>Hola Mundo</div>
      <div className={classes.text}>
        {'Apreta el boton para contactar con la api'}
      </div>
      <div onClick={handleGetHelloWorld} className={classes.button}>
        Pedir Saludo
      </div>
    </div>
  );
};

export default HelloWorld;

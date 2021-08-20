import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useStyles from './styles';
const UseStateExample = () => {
  const dimensions = useWindowDimensions();

  const classes = useStyles(dimensions);

  const history = useHistory();

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const calculateInputLenght = () => {
    return inputValue.length;
  };

  return (
    <div className={classes.container}>
      <div className={classes.goBackContainer} onClick={handleGoBack}>
        <ArrowBackIcon style={{ width: '100%', height: '100%' }} />
      </div>
      <div className={classes.title}>useState hook</div>
      <div className={classes.buttonExampleContainer}>
        <div className={classes.actionButtonsContainer}>
          <div className={classes.button} onClick={() => setCount(count + 1)}>
            Presione para incrementar
          </div>
          <div className={classes.button} onClick={() => setCount(0)}>
            Presione para reiniciar
          </div>
        </div>
        <div className={classes.text}>{'El valor actual es : ' + count}</div>
      </div>
      <div className={classes.inputExampleContainer}>
        <input
          className={classes.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className={classes.text}>
          {'la cantidad de letras es : ' + calculateInputLenght()}
        </div>
      </div>
    </div>
  );
};

export default UseStateExample;

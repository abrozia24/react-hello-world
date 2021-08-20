import React from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './styles';

const HomeButton = ({ text, handleNavigate }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} onClick={handleNavigate}>
      <div className={classes.iconContainer}>
        <ArrowForwardIosIcon style={{ height: '100%', width: '100%' }} />
      </div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

HomeButton.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
  handleNavigate: PropTypes.func,
};

export default HomeButton;

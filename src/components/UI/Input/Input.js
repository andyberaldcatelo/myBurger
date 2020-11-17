import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
  let inputType = null;

  switch (props.inputtype) {
    case 'input':
      inputType = <input className={classes.InputElement} {...props} />;
      break;
    case 'textarea':
      inputType = <textarea className={classes.InputElement} {...props} />;
      break;

    default:
      inputType = <input className={classes.InputElement} {...props} />;
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputType}
    </div>
  );
};

export default input;

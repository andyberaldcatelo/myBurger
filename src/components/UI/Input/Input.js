import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
  let inputType = null;
  const cssClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate) {
    cssClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputType = (
        <input
          className={cssClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputType = (
        <textarea
          className={cssClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputType = (
        <select
          className={cssClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputType = (
        <input
          onChange={props.changed}
          className={cssClasses}
          {...props.elementConfig}
          value={props.value}
        />
      );
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

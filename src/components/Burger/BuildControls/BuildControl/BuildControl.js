import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
  <div>
    <div className={classes.BuildControl}>{props.label}</div>
    <button className={classes.More}>More</button>
    <button className={classes.Less}>Less</button>
  </div>
);

export default buildControl;

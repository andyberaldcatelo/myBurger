import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'sald' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl key={ctrl.label} label={ctrl.label}></BuildControl>
    ))}
  </div>
);

export default buildControls;

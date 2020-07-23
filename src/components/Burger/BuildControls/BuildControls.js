import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl
        added={() => props.ingredientAdded(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
      ></BuildControl>
    ))}
  </div>
);

export default buildControls;

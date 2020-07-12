import React from 'react';
import classes from './BurgerIngredient.module.css';

const ingredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={classes.BreadBottom}></div>;
      break;

    case 'bread-top':
      ingredient = (
        <div className={classes.BreadTop}>
          <div classeName={classes.Seeds1}></div>
          <div classeName={classes.Seeds2}></div>
        </div>
      );
      break;

    case 'meat':
      ingredient = <div className={classes.Meat}></div>;
      break;

    case 'cheese':
      ingredient = <div className={classes.Cheese}></div>;
      break;

    case 'salad':
      ingredient = <div className={classes.Salad}></div>;
      break;

    case 'bacon':
      ingredient = <div className={classes.Bacon}></div>;
      break;

    default:
      ingredient = null;

      return ingredient;
  }
};

export default ingredient;

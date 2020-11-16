import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  const ingredients = [];
  for (const ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientsJSX = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          padding: '0 5px',
          border: '1px solid #ccc',
        }}
        key={ig.name}
      >
        {ig.name} : ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients : {ingredientsJSX} </p>
      <p>
        Price: <strong>EUR : {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;

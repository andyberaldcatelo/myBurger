import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 1,
    cheese: 0.8,
    meat: 1.5,
  };

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + this.INGREDIENTS_PRICE[type];
    this.setState({ ingredients: updatedIngredients, newPrice });
  };

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;

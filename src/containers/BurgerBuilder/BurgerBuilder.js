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
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const priceAddition = this.INGREDIENTS_PRICE[type];
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, newPrice });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const oldPrice = this.state.totalPrice;
    const priceDeduction = this.INGREDIENTS_PRICE[type];
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredients: updatedIngredients, newPrice });
  };

  render() {
    let disableInfo = { ...this.state.ingredients };
    // {salad: true, bacon:false, etc}
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0; // Vrai ou Faux
    }

    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disableInfo}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;

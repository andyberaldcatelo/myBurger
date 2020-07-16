import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  // La variable transformedIngredient résulte de la transformation d'un objet composé de paires clé-valeur
  // en un array JSX de <BurgerIngredient/>. La clé est importante pour savoir de quel
  // ingrédient on a besoin, et la valeur l’est pour l'occurence de chaque ingrédient
  const transformedIngredients = Object.keys(props.ingredients) // donne l'array ["salad", "bacon", "cheese", "meat"]
    .map((igKey) => {
      // map() s'exécute pour chaque élément l'array

      // l'idée est de recréer un array qui aura le même nombre d'entrées
      // que le nombre d'occurences de l'ingrédient dans le state
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // Pour chaque élément de l'array obtenu, on crée un élément JSX
        // BurgerIngredient auquel on passera une key (obligatoire lorsqu'on
        // retourne une liste en JSX), et le type d'ingrédient
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;

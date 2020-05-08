import React from 'react';
import Meal from './Meal'
import styles from './MealList.module.css';

function MealList({meals}) {
  
  return (
    <div className={styles.mealList}>
      
      <h3>Latest Meals</h3>
      {
        meals ? 
        
        meals.map(meal => (<Meal key={meal.idMeal} id={meal.idMeal} image={meal.strMealThumb} name={meal.strMeal} properties={meal} />)) 
        
        : <h1>Results are not found</h1>

      } 
    </div>
  )
}

export default MealList;

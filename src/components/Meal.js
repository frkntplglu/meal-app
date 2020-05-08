import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Meal.module.css';

function Meal({properties}) {
  return (
    <div className={styles.meal}>
      <Link to={'/meals/' + properties.idMeal}><img src={properties.strMealThumb} alt={properties.strMeal}/></Link>
    </div>
  )
}

export default Meal;

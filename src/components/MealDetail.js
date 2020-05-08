import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './MealDetail.module.css';



function MealDetail(props) {

  const [meal,setMeal] = useState([]);
  const [ingredients,setIngredients] = useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`)
    .then(response => {
      const ingredients = [];
      for(let i=1; i<=20; i++){
        if(response.data.meals[0][`strIngredient${i}`]){
          ingredients.push(`${response.data.meals[0][`strIngredient${i}`]} - ${response.data.meals[0][`strMeasure${i}`]}`);
        }
      }
      setMeal(response.data.meals[0]);
      setIngredients(ingredients);
    })
  },[props.match.params.id]);

  return (
    <div className={styles.mealContainer}>
      <Link to='/' className={styles.backhome}> Back </Link>
      <h1>{meal.strMeal}</h1>
      <div className={styles.mealPhoto}><img src={meal.strMealThumb} alt={meal.strMeal} /></div>
      <div className={styles.mealInfo}>
        <ul>
          <li><b>Category : </b> {meal.strCategory}</li>
          <li><b>Area : </b> {meal.strArea}</li>
        </ul>
        <div className={styles.ingredients}>
          {ingredients.map((ingredient,index) => (<span key={index}>{ingredient}</span>))}
        </div>
        {meal.strInstructions}

        <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch Recipe Video</a>
      </div>
    </div>
  )
}

export default MealDetail;

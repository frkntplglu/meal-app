import React,{useState} from 'react';
import Header from './components/Header'
import Search from './components/Search'
import MealList from './components/MealList'
import MealDetail from './components/MealDetail'

import { Route, withRouter } from 'react-router-dom';

import axios from 'axios';
import styles from './App.module.css';

function Kitchen(props) {

  const [meals, setMeals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);


  const getQuery = (query) => {
    
    props.history.push('/');
    setIsLoaded(false);
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(response => {
      setIsLoaded(true);
      setMeals(response.data.meals)
    })
    
  }

  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}>
        <Search getQuery={getQuery} />
        { isLoaded ? <Route path='/' exact render={() => <MealList meals={meals} />} /> : 'Loading....'}
        <Route path='/meals/:id' component={MealDetail} />
      </div>

      
    </div>
  )
}

export default withRouter(Kitchen);

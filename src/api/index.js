import axios from 'axios';

export const searchMeal = (query) => {
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Steak`)
  .then(response => {
    return response.data
  })
}
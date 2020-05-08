import React, {useState} from 'react';
import styles from './Search.module.css';



function Search(props) {

  const [query,setQuery] = useState('');

  // Taking value of input and assign to state
  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  // Send input value to the parent component when form is submitted
  const sendQuery = (e) => {
    e.preventDefault();
    setQuery('');
    props.getQuery(query);
  }

  
  return (
    <div className={styles.searchFormWrap}>
      <form action="/" onSubmit={sendQuery} className={styles.searchForm}>
        <input type="text" value={query} onChange={changeHandler} placeholder="Search for a Meal..." />
        <button>SEARCH</button>
      </form>
    </div>
  )
}

export default Search;

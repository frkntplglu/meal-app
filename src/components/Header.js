import React from 'react';
import logo from '../images/logo-small.png'
import styles from './Header.module.css';
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Meal App" />
        <div className={styles.author}>Furkan Topaloğlu</div>
      </div>
    </div>
  )
}

export default Header;

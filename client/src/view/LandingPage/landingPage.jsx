import React from 'react';
import styles from './landingPage.module.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <h1 className={styles.title}>RECIPES BOOK</h1>
      <Link to="/home">
        <button className={styles.buttonLandingPage}> Bone appetit</button>
      </Link>
    </div>
  );
}

export default LandingPage;

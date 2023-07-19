import React from 'react';
import style from './landingPage.module.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
      <div className={styles.landingPage}>
        <h1 className={styles.title}>Welcome to Our Food Page!</h1>
        <Link to="/home">
          <button>Bon appetite!</button>
        </Link>
      </div>
    );
  }
  
  export default LandingPage;
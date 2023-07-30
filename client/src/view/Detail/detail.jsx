import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRecipeDetail } from '../../redux/actions';
import { useParams, Link } from 'react-router-dom';
import style from './detail.module.css';

function Detail() {
  const { id } = useParams();
  console.log('este es mi id', id);
  const selector = useSelector(state => state.recipeDetail);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRecipeDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.conteiner}>
      {selector.hasOwnProperty("name") ? (
        // <div className={style.allDetails}>
          <div className={style.detailInfo}>
            <img className={style.imgDetails} src={selector.image} alt={selector.name} width='300px' height='200px' />
            <h2>Name: </h2>
            <p>{selector.name}</p>
            <h2>Diets: </h2>
            <p>{selector.diets}</p>
            <h2>Summary: </h2>
            <p className={style.summary}>{selector.summary}</p>
            <h2>Steps: </h2>
            <p>{selector.steps}</p>
            <h2>healthscore: </h2>
            <label className={style.healthscore}>{selector.healthscore}</label>
            <Link to='/home'><button className={style.buttonBack}>Back</button></Link>
          </div>
        // </div>
      ) : null}
    </div>
  );
}

export default Detail;
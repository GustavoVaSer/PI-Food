import style from './Card.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {

  const {id, name, image, diets, healthscore} = props

  return (
    <div className={style.cards}>
      <h3 className={style.titleCards}>{name}</h3>
      <Link to={`/detail/${id}`} ><img src={image} alt={name} width='300px'/></Link>
      <p className={style.dietsCards}>{diets.join(', ')}</p>
      <label>{healthscore}</label>
    </div>
  )
}

export default Card;
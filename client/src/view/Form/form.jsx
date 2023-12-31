import React, { useEffect, useState } from 'react'
import { getDiets } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import validation from './validation'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import style from './form.module.css'

function Form() {

    const diets = useSelector(state => state.diets)

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getDiets())
    }, [dispatch])

    const [newRecipe, setNewRecipe] = useState({
      name: '',
      summary: '',
      healthscore: '',
      steps: '',
      image: '',
      diets: []
    })
    
    const [error, setError] = useState({
      name: '',
      summary: '',
      healthscore: '',
      steps: '',
      image: '',
      diets: []
    })

    const handleChange = (e)=>{
      setNewRecipe({
        ...newRecipe,
            [e.target.name] : e.target.value,
          })
          console.log(newRecipe);
        setError(validation({
            ...newRecipe,
            [e.target.name] : e.target.value
          }))
      }

      const handleChecked = (e) =>{
        if (e.target.checked){
          setNewRecipe({
            ...newRecipe,
            diets : [...newRecipe.diets, e.target.value]
          })}
        else{
          setNewRecipe({
            ...newRecipe,
            diets: newRecipe.diets.filter(x => x !== e.target.value)
      })
    }
    console.log("Diets selected:", newRecipe.diets);
  }     
            const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3001/recipes', newRecipe)
      .then(res => alert('Recipe created succesfully!'))
      .catch(err => alert("Ups!  We're having some trouble creating your recipe, please try again"))
      setNewRecipe({
        name: '',
        summary: '',
        healthscore: '',
        steps: '',
        image: '',
        diets: []
      })
    }

  return (
    <div className={style.mainBox}>
        <div className={style.divForms}>

            <div className={style.divAllInputForms}>

                <div className={style.divInputForms}>
                    <label htmlFor="name">Name: </label>
                    <input className={style.labelInputForms} value={newRecipe.name} type="text" name='name' onChange={handleChange} /> 
                    {error.name && <span className={style.spanInputError}>{error.name}</span>}
                </div>

                <div className={style.divInputForms}>
                    <label className={style.labelForms} htmlFor="summary">Summary: </label>
                    <input className={style.labelInputForms} value={newRecipe.summary} type="text" name='summary' onChange={handleChange}/>
                    {error.summary && <span className={style.spanInputError}>{error.summary}</span>}
                </div>

                <div className={style.divInputForms}>
                    <label className={style.labelForms} htmlFor="healthscore">Healthscore: </label>
                    <input className={style.labelInputForms} value={newRecipe.healthscore} type="number" name='healthscore' onChange={handleChange}/>
                    {error.healthscore && <span className={style.spanInputError}>{error.healthscore}</span>}
                </div>

                <div className={style.divInputForms}>
                    <label className={style.labelForms} htmlFor="steps">Steps: </label>
                    <input className={style.labelInputForms} value={newRecipe.steps} type="text" name='steps' onChange={handleChange}/>
                    {error.steps && <span className={style.spanInputError}>{error.steps}</span>}
                </div>

                <div className={style.divInputForms}>
                    <label className={style.labelForms} htmlFor="image">Image: </label>
                    <input className={style.labelInputForms} value={newRecipe.image} type="text" name='image' onChange={handleChange}/>
                    {error.image && <span className={style.spanInputError}>{error.image}</span>}
                </div>

            </div>
                <h2 className={style.h2Forms}>Choose your diets..</h2>
            
                <div className={style.divMappingDietsForms}>
                    {
                        diets.length >= 1 ? (
                          diets?.map((elem, index) => (
                            <label htmlFor='diets' key={index}>
                              <input
                                type='checkbox'
                                name='diets'
                                value={elem.name}
                                key={index}
                                checked={newRecipe.diets.includes(elem.name)} // Verificar si la dieta está seleccionada
                                onChange={handleChecked}
                              />
                              {elem.name}
                            </label>
                             ))
                             ) : null
                    }
                    {error.diets && <span>{error.diets}</span>}
                </div>
                <div className={style.divButtonAndImgForms}>

                    {
                    newRecipe.name !== '' && newRecipe.summary !== '' && newRecipe.healthscore !== '' && newRecipe.image !== '' && newRecipe.image !== '' && newRecipe.diets.length >= 1
                    ? <button className={style.buttonSubmitForm} type='submit' onClick={(e) => handleSubmit(e)}>Create</button> 
                    :<button disabled className={style.buttonSubmitForm}>Fill all camps</button> 
                    }
                </div>
            

        </div>
            <div className={style.divImgFormsToHome}> 
                {/* <Link to='/home'><img src={takeHome} alt="Home button" height='200px' width='250px' /></Link>  */}
            </div>
    </div>)
}

export default Form;
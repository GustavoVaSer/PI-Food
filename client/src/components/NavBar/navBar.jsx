import style from './navBar.module.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipesByName } from '../../redux/actions'
import { Link } from 'react-router-dom'

 function NavBar() {

    const dispatch = useDispatch()
    
    const [recipeName, setRecipeName] = useState({
      recipeValue: ''
    })
    
    const handleSearch = (e) =>{
      setRecipeName({recipeValue: e.target.value})
    }
    
    const onSearch = () =>{
      dispatch(getRecipesByName(recipeName.recipeValue))
    }
    
      return (
        
        <div className={style.divNav}>
          <Link to='/'> <img className={style.imgNav}/></Link>
          <input className={style.inputNav} type="text" name='search' value={recipeName.recipeValue} onChange={(e)=>handleSearch(e)} placeholder='recipes..'/>
          <div>
            <button className={style.buttonNav} onClick={onSearch}>Search</button>
          </div>
        </div>
      )
    }

 export default NavBar;
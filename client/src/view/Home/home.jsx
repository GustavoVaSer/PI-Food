import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/card'
import NavBar from '../../components/NavBar/navBar'
import Pagination from '../Pagination/pagination'
import { useDispatch, useSelector } from 'react-redux'
import { filterByDiets, getRecipes, getDiets, healthScoreAsc, order, orderDesc, healthScoreDesc, /*getByApi*/} from '../../redux/actions'
import  style from './home.module.css'
import { Link } from 'react-router-dom'

function Home() {

    const dispatch = useDispatch()
  
     const allRecipes = useSelector((state)=> state.recipes)
  
     const diets = useSelector((state) => state.diets)
  
     const [setOrdered] = useState('')
  
      const [currentPage, setCurrentPage] = useState(1)
      const [elementsPerPage] = useState(9)
  
      const indexOfLastElement = currentPage * elementsPerPage
      const indexOfFirstElement = indexOfLastElement - elementsPerPage
      const filteredRecipes = allRecipes.slice(indexOfFirstElement, indexOfLastElement)
  
      const paginationButtonNext = (e) => {
        e.preventDefault();
        setCurrentPage(currentPage + 1);
    };
  
      const paginationButtonPrev = (e) => {
        e.preventDefault();
        setCurrentPage(currentPage - 1);
    };
   
      const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber)
        }
       
      useEffect(()=>{
          dispatch(getRecipes())
           dispatch(getDiets())
        },[dispatch])
        
        const handleDiets = (e) =>{
          e.preventDefault();
              dispatch(filterByDiets(e.target.value))
          setOrdered(`order ${e.target.value}`)
        }
  
        const handleSort = (e) =>{
          e.preventDefault()
          e.target.value === 'Asc'
          ? dispatch(order(e.target.value))
          : dispatch(orderDesc(e.target.value))
          setOrdered(`order ${e.target.value}`)
        }
        
        const handleHs = (e)=>{
          console.log('entre al handlehs');
          e.preventDefault()
          e.target.value === 'hsasc'
          ? dispatch(healthScoreAsc(e.target.value))
          : dispatch(healthScoreDesc(e.target.value))
          setOrdered(`order ${e.target.value}`)
          console.log(healthScoreAsc());
        }

  
    return (
        <div className={style.divHome}>
            <NavBar/>
  
        <div className={style.allButtonsHome}>
        <select onChange={(e)=>handleDiets(e)} className={style.allDiets}>
            <option value="All">All Diets</option>
            {
                diets?.map((e, index) =>
                (
                <option value={e.name} key={index}>{e.name}</option>
                )
                )
            }
            </select>
            
                <button className={style.buttonOrderHome} value='Asc' onClick={(e)=>handleSort(e)}>A-Z</button>
                <button className={style.buttonOrderHome} value='Desc' onClick={(e)=>handleSort(e)}>Z-A</button>

                <button className={style.buttonSortHome} value='hsasc' onClick={(e)=>handleHs(e)}>Healthier</button>
                <button className={style.buttonSortHome} value='hsdesc' onClick={(e)=>handleHs(e)}>Less Healthy</button>
            <Link to='/form'><button className={style.buttonHomeForm}>New recipe</button></Link>

        </div>
      
        <div className={style.boxPagination}>
            <div>
                {currentPage === 1 ? ( <span></span> ) : ( <button className={style.divPrevButton} onClick={e => paginationButtonPrev(e)} >prev</button> )}
            </div> 
                <div>
                    <Pagination 
                        currentPage={currentPage}
                        elementsPerPage={elementsPerPage}
                        totalElements={allRecipes.length}
                        onPageChange={handlePageChange}
                    />
                </div>
            <div >
                {Math.ceil(allRecipes.length /elementsPerPage) > currentPage ? ( 
                <button className={style.divPrevButton} onClick={e => paginationButtonNext(e)} >next</button> 
                ) : ( <span></span> )
                }
            </div>
        </div>
        <div className={style.cards}>
          {filteredRecipes?.length >= 1 ? (
            filteredRecipes.map((e, index) => (
              <Card
                key={index}
                id={e.id}
                name={e.name}
                image={e.image}
                diets={e.diets}
                healthscore={e.healthscore}
              />
            ))
          ) : allRecipes.length === 0 ? (
            <h1>Loading...</h1>
          ) : null}
        </div>

        </div> 
    )
  }

  export default Home;
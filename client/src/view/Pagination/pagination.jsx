import React from 'react'
import style from './pagination.module.css'

function Pagination({ currentPage, elementsPerPage, totalElements, onPageChange }) {
    const totalPages = Math.ceil(totalElements / elementsPerPage);
    const pages = [...Array(totalPages).keys()].map(page => page + 1);  
    return (
    <div className={style.divPagination}>
       {pages.map((page) => (
            <button key={page} onClick={() => onPageChange(page)} className={style.pagePagination}>{page}</button>
          ))}
    </div>
  )
}

export default Pagination;
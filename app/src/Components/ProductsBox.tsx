import React, { useEffect, useState } from 'react'
import { Product } from '../Types/Product'
// import { ApiProductRepository } from '../Repository/Concrete/ProductApi/ApiProductRepository'
import { JsonProductRepository } from '../Repository/Concrete/FromJson/JsonProductRepository'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux/es/exports'


export default function ProductsBox({allProducts}:any, {loading}:any) {
    const ELEM_PER_PAGE = 16
    const [pageProducts, setPageProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const goPrevPage = () =>{if(currentPage!==1){setCurrentPage(currentPage-1)}}
    const goNextPage = () =>{setCurrentPage(currentPage+1)}

    useEffect(()=>{
        if(allProducts){
            setPageProducts(allProducts.slice((currentPage-1)*ELEM_PER_PAGE, currentPage*ELEM_PER_PAGE))
        }     
    },[currentPage,allProducts])




    if(loading===true){
        
        return (
            <div className='home__loading-icon-container'>
               <img alt='loading-icon' className='home__loading-icon' src='https://images.pond5.com/circle-loading-icon-transparent-background-footage-126963108_iconl.jpeg'></img>
            </div>
          )
    }
    else{
        return(

            <div className="home__products-part">
                <div className="products-part__fixed-frame">
                    <div className="products-part__products-container">
                        {pageProducts.map((p)=> (
                            ProductCard(p)
                        )   )}
                    </div>  
        
                </div>
              
                <div className="products-part__pagination-buttons-container">
                    <span>Page: {currentPage}</span>
                    <button className={`products-part__prev-page ${currentPage===1? '--disabled': ''}`} onClick={goPrevPage}>◄</button>
                    <button className='products-part__next-page' onClick={goNextPage}>►</button>
                </div>
        
            </div>

     
        )
    }
 
}

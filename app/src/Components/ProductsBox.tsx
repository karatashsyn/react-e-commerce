import React, { useEffect, useState } from 'react'
import { Product } from '../Types/Product'
import { ProductRepository } from '../Repository/Concrete/FromJson/ProductRepository'
import ProductCard from './ProductCard'


export default function ProductsBox() {
    const ELEM_PER_PAGE = 16
    const emptyProductArray:Array<Product>= []
    const productService = new ProductRepository()
    const [allProducts, setAllProducts] = useState(emptyProductArray)
    const [pageProducts, setPageProducts] = useState(emptyProductArray)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const goPrevPage = () =>{
        if(currentPage!==1){
            setCurrentPage(currentPage-1)
        }
    }
    const goNextPage = () =>{
        setCurrentPage(currentPage+1)
    }

    useEffect(()=>{
        setAllProducts(productService.getAll())
    },[])

    useEffect(()=>{
        setPageProducts(allProducts.slice((currentPage-1)*ELEM_PER_PAGE, currentPage*ELEM_PER_PAGE))
    },[currentPage,allProducts])

  return (

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

import React, { useEffect, useState } from 'react'
import { Product } from '../Types/Product'
import { JsonProductRepository } from '../Repository/Concrete/FromJson/JsonProductRepository'
import { ApiProductRepository } from '../Repository/Concrete/ProductApi/ApiProductRepository'
import ProductCard from './ProductCard'
import { text } from 'stream/consumers'


export default function ProductsBox() {
    const ELEM_PER_PAGE = 16
    const emptyProductArray:Array<Product>= []
    const productService = new ApiProductRepository()
    const [allProducts, setAllProducts] = useState(emptyProductArray)
    const [pageProducts, setPageProducts] = useState(emptyProductArray)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const goPrevPage = () =>{
        if(currentPage!==1){
            setCurrentPage(currentPage-1)
        }
    }

    const fetchData = async ()=>{
        setLoading(true)
        const res = await productService.getAll()
        
        setAllProducts(res)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData()
    },[])


    const goNextPage = () =>{
        setCurrentPage(currentPage+1)
    }


    useEffect(()=>{
        if(allProducts){
            setPageProducts(allProducts.slice((currentPage-1)*ELEM_PER_PAGE, currentPage*ELEM_PER_PAGE))
        }
        
    },[currentPage,allProducts])

    if(loading){
        return (
            <div className='home__loading-txt'>Loading...</div>
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

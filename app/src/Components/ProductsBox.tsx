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
                    <button className={`products-part__prev-page ${currentPage===1? '--disabled': ''}`} onClick={goPrevPage}>

                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="9.11182" width="13" height="3" rx="1.5" transform="rotate(-44.5 0 9.11182)" fill="black"/>
<rect y="9.11182" width="13" height="3" rx="1.5" transform="rotate(-44.5 0 9.11182)" fill="black"/>
<rect y="9.11182" width="13" height="3" rx="1.5" transform="rotate(-44.5 0 9.11182)" fill="black"/>
<rect x="2.10272" y="7" width="13" height="3" rx="1.5" transform="rotate(44.5 2.10272 7)" fill="black"/>
<rect x="2.10272" y="7" width="13" height="3" rx="1.5" transform="rotate(44.5 2.10272 7)" fill="black"/>
<rect x="2.10272" y="7" width="13" height="3" rx="1.5" transform="rotate(44.5 2.10272 7)" fill="black"/>
</svg>


                    </button>
                    <button className='products-part__next-page' onClick={goNextPage}>
                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="12.9971" height="2.99935" rx="1.49968" transform="matrix(-0.713097 -0.701066 -0.700753 0.713404 11.37 9.11182)" fill="black"/>
<rect width="12.9971" height="2.99935" rx="1.49968" transform="matrix(-0.713097 -0.701066 -0.700753 0.713404 11.37 9.11182)" fill="black"/>
<rect width="12.9971" height="2.99935" rx="1.49968" transform="matrix(-0.713097 -0.701066 -0.700753 0.713404 11.37 9.11182)" fill="black"/>
<rect width="12.9971" height="2.99935" rx="1.49968" transform="matrix(-0.713097 0.701066 0.700753 0.713404 9.26817 7)" fill="black"/>
<rect width="12.9971" height="2.99935" rx="1.49968" transform="matrix(-0.713097 0.701066 0.700753 0.713404 9.26817 7)" fill="black"/>
<rect width="12.9971" height="2.99935" rx="1.49968" transform="matrix(-0.713097 0.701066 0.700753 0.713404 9.26817 7)" fill="black"/>
</svg>

                    </button>
                </div>
        
            </div>

     
        )
    }
 
}

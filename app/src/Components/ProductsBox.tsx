import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import LeftArrow from "../assets/leftArrow"
import RightArrow from "../assets/rightArrow"

export default function ProductsBox({ allProducts }: any, { loading }: any) {
  const ELEM_PER_PAGE = 16
  const [pageProducts, setPageProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const goPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const goNextPage = () => {
    if(allProducts[currentPage*ELEM_PER_PAGE]){
      setCurrentPage(currentPage + 1)
    }
    
  }


  useEffect(() => {
    if (allProducts) {
      setPageProducts(
        allProducts.slice(
          (currentPage - 1) * ELEM_PER_PAGE,
          currentPage * ELEM_PER_PAGE
        )
      )
    }
  }, [currentPage, allProducts])

  if (loading === true) {
    return (
      <div className='home__loading-icon-container'>
        <img
          alt='loading-icon'
          className='home__loading-icon'
          src='https://images.pond5.com/circle-loading-icon-transparent-background-footage-126963108_iconl.jpeg'
        ></img>
      </div>
    )
  } else {
    return (
      <div className='home__products-part'>
        <div className='products-part__fixed-frame'>
          <div className='products-part__products-container'>
            {pageProducts.map((p) => ProductCard(p))}
          </div>
        </div>

        <div className='products-part__pagination-buttons-container'>
          <span className="products-part__page-number">Page: {currentPage}</span>
          <button
            className={`products-part__prev-page ${
              currentPage === 1 ? "--disabled" : ""
            }`}
            onClick={goPrevPage}
          >
            <LeftArrow/>
          </button>
          <button className='products-part__next-page' onClick={goNextPage}>
            <RightArrow/>
          </button>
        </div>
      </div>
    )
  }
}

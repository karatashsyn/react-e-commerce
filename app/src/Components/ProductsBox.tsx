import React, { useEffect, useState } from 'react'
import { Product } from '../Types/Product'
import { ProductRepository } from '../Repository/Concrete/FromJson/ProductRepository'
import ProductCard from './ProductCard'


export default function ProductsBox() {
    const emptyProductArray:Array<Product>= []
    const [allProducts, setAllProducts] = useState(emptyProductArray)
    const productService = new ProductRepository()
    useEffect(()=>{
        setAllProducts(productService.getAll())
    },[])

  return (

    <div className="home__products-part">
        <div className="products-part__fixed-frame">
            <div className="products-part__products-container">
                {allProducts.map((p)=> (
                    ProductCard(p)
                )   )}
            </div>

        </div>
      
        <div className="products-part__pagination-buttons-container">
            <button className='prev-page'></button>
            <button className='next-page'></button>
        </div>

    </div>
  )
}

import { url } from 'inspector';
import React, { useEffect } from 'react'
import { Product } from '../Types/Product'
export default function ProductCard(product:Product) {
  console.log(product.image);
  
  return (

    <>
        <div className='products-container__product-card'>
            <div className='product-card__imgBox' style={{backgroundImage:`url(${product.image})`}}></div>
            <div className="product-card__info-container">
            <span className='product-card__brand'>{`${product.brand} `}</span>
            <p className='product-card__productName'>{product.name}</p>
            <span>{product.price}</span>
            </div>
        <button className='product-card__add-to-cart-btn'></button>
      </div>
    </>
    
  )
}

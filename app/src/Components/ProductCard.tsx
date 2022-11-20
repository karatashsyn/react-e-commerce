import React from 'react'
import { Product } from '../Types/Product'
export default function ProductCard(product:Product) {
  return (
    <>
        <div className='product-card'>
            <div className='product-card__imgBox' style={{backgroundImage: product.image}}></div>
            <span className='product-card__brand'>{product.brand}</span>
            <span className='product-card_productName'>{product.name}</span>
            <span>{product.price}</span>
        <button className='product-card__add-to-cart-btn'></button>
      </div>
    </>
  )
}

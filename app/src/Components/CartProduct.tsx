import React from "react"
import { CartProductType } from "../Types/CartProduct"

export default function CartProduct({ cartProd }: any) {
  const totalPrice: number = cartProd.product.price * cartProd.number
  return (
    <div className='cart-product'>
      <img
        alt='product-img'
        className='cart-product__img'
        src={cartProd.product.image}
      ></img>
      <div className='cart-product__name'> {cartProd.product.name}</div>
      <div className='cart-product__number'> {cartProd.number}</div>
      <div className='cart-product__total-price'> {totalPrice}$</div>
      <div className='cart-product__btn-container'>
        <button className='cart-product__add'>+</button>
        <button className='cart-product__delete'>-</button>
      </div>
    </div>
  )
}

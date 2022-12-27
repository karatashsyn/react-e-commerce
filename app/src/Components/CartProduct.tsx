import React from "react"
import { useDispatch } from "react-redux"
import { cartActions } from "../store"
import { CartProductType } from "../Types/CartProduct"

export default function CartProduct({ cartProd }: any) {
  const totalPrice: number = cartProd.product.price * cartProd.number
  const dispatch = useDispatch()
  return (
    <div className='cart-product'>
      <div className='cart-product__img-container'>
        <img
          alt='product-img'
          className='cart-product__img'
          src={cartProd.product.image}
        ></img>
      </div>
      <div className='cart-product__name'> {cartProd.product.name}</div>
      <div className='cart-product__number'> {cartProd.number}</div>
      <div className='cart-product__total-price'> {totalPrice}$</div>
      <div className='cart-product__btn-container'>
        <button
          className='cart-product__add'
          onClick={() => dispatch(cartActions.addToCart(cartProd.product))}
        >
          +
        </button>
        <button
          className='cart-product__delete'
          onClick={() => dispatch(cartActions.deleteFromCart(cartProd.product))}
        >
          -
        </button>
      </div>
    </div>
  )
}

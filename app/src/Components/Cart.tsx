import React, { useState } from "react"
import { useSelector } from "react-redux"
import Modal from "../UI/Modal"
import CartProduct from "./CartProduct"

export default function Cart(props: any) {
  const cartProducts = useSelector((state: any) => state.cart)

  if (cartProducts.length > 0) {
    return (
      <Modal className='cart-modal' onCloseCart={props.onCloseCart}>
        <div>
          <h2 style={{ color: "black" }}>Cart</h2>
          Cart
          {cartProducts.map((cp: any) => (
            <CartProduct cartProd={cp} />
          ))}
        </div>
      </Modal>
    )
  } else {
    return (
      <Modal className='cart-modal' onCloseCart={props.onCloseCart}>
        <div>
          <h2 style={{ color: "black" }}>Cart</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 style={{ color: "black" }}> No products in your cart</h3>
          </div>
        </div>
      </Modal>
    )
  }
}

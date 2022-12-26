import React from "react"
import { useSelector } from "react-redux"
import Modal from "../UI/Modal"
import CartProduct from "./CartProduct"

export default function Cart() {
  const cartProducts = useSelector((state: any) => state.cart)
  return (
    <Modal className='cart-modal'>
      <div>
        Cart
        {cartProducts.map((cp: any) => (
          <CartProduct cartProd={cp} />
        ))}
      </div>
    </Modal>
  )
}

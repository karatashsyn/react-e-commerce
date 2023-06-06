import React from "react"
import { useSelector } from "react-redux"
import { CartProductType } from "../Types/CartProduct"
import Modal from "./UI/Modal"
import CartProduct from "./CartProduct"
import styles from "./cart.module.css"
export default function Cart(props: any) {
  const cartProducts: Array<CartProductType> = useSelector(
    (state: any) => state.cart
  )

  if (cartProducts.length > 0) {
    return (
      <Modal className={styles.cartModal} onCloseCart={props.onClick}>
        <div className={styles.container}>
          <div className={styles.upper}>
            <div className={styles.spanContainer}>
              <span className={styles.myCartSpan}>My Cart</span>
            </div>
            <div className={styles.productsSection}>
              <div className={styles.productsContainer}>
                {cartProducts.map((obj: any) => (
                  <CartProduct key={obj.product.id} cartObject={obj} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.down}>
            <div className={styles.totalSpanContainer}>
              <span className={styles.totalSpan}>Total:</span>
              <span className={styles.dollarSpan}>$</span>
              <span className={styles.totalInfoSpan}>
                {cartProducts
                  .reduce(
                    (total, current) =>
                      total + current.product.price * current.number,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <div className={styles.downActionsContainer}>
              <button
                onClick={props.onClick}
                className={`${styles.downBtn} ${styles.cancel}`}
              >
                Cancel
              </button>
              <button className={`${styles.downBtn} ${styles.confirm}`}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>
    )
  } else {
    return (
      <Modal className={styles.cartModal} onCloseCart={props.onClick}>
        <div>
          <div className={styles.myCartSpanContainer}>
            <span className={styles.myCartSpan}>My Cart</span>
          </div>
          <div className={styles.noProductContainer}>
            <span className={styles.noProductsSpan}>
              No product in your cart.
            </span>
          </div>
        </div>
      </Modal>
    )
  }
}

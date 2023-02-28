import React from "react"
import { useDispatch } from "react-redux"
import { cartActions } from "../store"
import { Product } from "../Types/Product"
import styles from "./cartProduct.module.css"

export default function CartProduct({ cartObject }: any) {
  const product: Product = cartObject.product
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addToCart(product))
  }
  const removeFromCart = () => {
    dispatch(cartActions.deleteFromCart(product))
  }

  return (
    <div className={styles.cartProduct}>
      <div className={styles.imgContainer}>
        <img alt='Product' className={styles.img} src={product.image}></img>
        <div className={styles.imgMask}></div>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.productName}> {product.name}</span>
        <div className={styles.additionalInfoContainer}>
          <div className={styles.sellerInfoContainer}>
            <div className={styles.brandIconContainer}>
              <img src='assets/Brand.svg' alt='Brand Icon' />
            </div>

            <span className={`${styles.sellerInfoSpan} ${styles.infoSpan}`}>
              {product.brand}
            </span>
          </div>
          <div className={styles.ratingInfoContainer}>
            <div className={styles.ratingIconContainer}>
              <img src='../../assets/Rating.svg' alt='Rating' />
            </div>
            <span className={`${styles.ratingInfoSpan} ${styles.infoSpan}`}>
              {product.rating}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <div className={styles.quantityContainer}>
          <div className={styles.buttonsContainer}>
            <div
              onClick={removeFromCart}
              className={`${styles.deleteBtn} ${styles.quantityBtn}`}
            >
              <img
                className={styles.quantityIcon}
                src='assets/Minus.svg'
                alt='Minus'
              />
            </div>
            <div
              onClick={addToCart}
              className={`${styles.addBtn} ${styles.quantityBtn}`}
            >
              <img
                className={styles.quantityIcon}
                src='assets/Plus.svg'
                alt='Plus'
              />
            </div>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.dollarSpan}>$</span>
            <span className={styles.productPrice}>
              {(product.price * cartObject.number).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

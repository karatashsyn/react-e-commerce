import { useDispatch } from "react-redux"
import { cartActions } from "../store"
import styles from "./productCard.module.css"
export default function ProductCard({ product }: any) {
  const dispatch = useDispatch()
  return (
    <div className={styles.productCard}>
      <div
        className={styles.imgBox}
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
      <div className={styles.infoContainer}>
        <p className={styles.productName}>{product.name}</p>
        <span
          role={"link"}
          className={styles.brand}
        >{`${product.brand} `}</span>
      </div>
      <div className={styles.btnContainer}>
        <span className={styles.price}>{"$ " + product.price}</span>
        <button
          className={styles.addBtn}
          onClick={() => {
            dispatch(cartActions.addToCart(product))
          }}
        >
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect x='5.6' width='2.8' height='14' rx='1.4' fill='white' />
            <rect
              y='8.4'
              width='2.8'
              height='14'
              rx='1.4'
              transform='rotate(-90 0 8.4)'
              fill='white'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

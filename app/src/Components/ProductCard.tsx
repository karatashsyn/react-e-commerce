import { useDispatch } from "react-redux"
import { cartActions } from "../store"

import styles from "./productCard.module.css"
import { Product } from "../Types/Product"
import Rating from "./UI/Rating"
import Arrow from "./UI/Arrow"
type Props = {
  product: Product
}
export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch()
  return (
    <div className={styles.productCard}>
      <div className={styles.imgBox}>
        <img src={product.image} alt='Product' />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.productNameContainer}>
          <p className={styles.productName}>{product.name}</p>
        </div>
        <div className={styles.brandContainer}>
          <span
            role={"link"}
            className={styles.brand}
          >{`${product.brand} `}</span>
        </div>
        <div className={styles.descriptionContainer}>
          <p> {product.description}</p>
        </div>
        <div className={styles.priceContainer}>
          <h1 className={styles.price}>{`$${product.price}`}</h1>
          <Rating rate={product.rating} />
        </div>
        <div
          onClick={() => dispatch(cartActions.addToCart(product))}
          className={styles.addBtn}
        >
          <span>Add To Cart</span>
          <div></div>
          <Arrow />
        </div>
      </div>
    </div>
  )
}

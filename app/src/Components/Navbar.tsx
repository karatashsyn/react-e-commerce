import React from "react"
import SearchBar from "./SearchBar"
import styles from "./navbar.module.css"
export default function Navbar({ cartProducts, cartHandlers }: any) {
  return (
    <div className={styles.navbar}>
      <SearchBar />
      <button className={styles.cartBtn} onClick={cartHandlers.showCartHandler}>
        Cart
        {cartProducts.length ? (
          <div className={styles.badge}>
            <span>{cartProducts.length}</span>
          </div>
        ) : (
          <div className={styles.hidden}></div>
        )}
      </button>
      <div className={styles.iconsContainer}>
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper} id='icon1'>
            <img className={styles.navIcon} src='assets/User.svg' alt='user' />
          </div>
          <span className={styles.iconSpan}>PROFILE</span>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper} id='icon2'>
            <img
              className={styles.navIcon}
              src='assets/Settings.svg'
              alt='settings icon'
            />
          </div>
          <span className={styles.iconSpan}>SETTINGS</span>
        </div>
      </div>
    </div>
  )
}

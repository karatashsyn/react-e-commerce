import React from "react"
import SearchBar from "./SearchBar"
import styles from "./navbar.module.css"
import { forwardRef } from "react"
const Navbar = forwardRef(({ cartProducts, cartHandlers }: any, ref: any) => {
  return (
    <div className={styles.navbar}>
      <SearchBar />

      <div className={styles.buttonsContainer}>
        <div className={styles.cartBtn} onClick={cartHandlers.showCartHandler}>
          {/* <div className={styles.drop}></div> */}
          <img src='assets/Bag.svg' alt='' />
          <span>Cart</span>
          {cartProducts.length ? (
            <div className={styles.badge}>
              <span>{cartProducts.length}</span>
            </div>
          ) : (
            <div className={styles.hidden}></div>
          )}
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper} id='icon1'>
              <img
                className={styles.navIcon}
                src='assets/User.svg'
                alt='user'
              />
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
    </div>
  )
})

export default Navbar

import React from "react"
import styles from "./loading.module.css"

export default function Loading() {
  return (
    <div className={styles.container}>
      <img
        alt='loading-icon'
        className={styles.loadingIcon}
        src='assets/Loading.svg'
      ></img>
    </div>
  )
}

import React from "react"
import styles from "./applyFilter.module.css"
export default function FilterBtn({ onClick }: any) {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.applyBtn} onClick={onClick}>
          Apply Filter
        </button>
      </div>
    </>
  )
}

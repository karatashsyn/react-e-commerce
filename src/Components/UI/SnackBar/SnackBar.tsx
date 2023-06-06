import React, { useImperativeHandle, useState } from "react"
import styles from "./snackBar.module.css"
import { forwardRef } from "react"
type Props = {
  succes: boolean | null
  message: string | null
}

const SnackBar = forwardRef(({ message, succes }: Props, ref) => {
  const [showed, setShowed] = useState(false)
  useImperativeHandle(ref, () => ({
    handleShow: () => {
      if (!showed) {
        setShowed(true)
        setTimeout(() => {
          setShowed(false)
        }, 1000)
      }
    },
  }))

  if (!succes && !message) {
    return null
  } else {
    return (
      <div
        className={
          showed ? `${styles.snackBar} ${styles.showed}` : styles.snackBar
        }
      >
        <div className={styles.statusIcon}>
          {succes ? (
            <h1 className={styles.succesIcon}>&#x2713;</h1>
          ) : (
            <h1 className={styles.failIcon}>&#x2613;</h1>
          )}
        </div>
        <h2 className={styles.message}>{message}</h2>
      </div>
    )
  }
})
export default SnackBar

import React from "react"
import ReactDOM from "react-dom"
import styles from "./modal.module.css"

const Backdrop = (props: any) => {
  return <div className={styles.backDrop} onClick={props.onCloseCart}></div>
}

const ModalOverlay = (props: any) => {
  return <div className={styles.overlay}>{props.children}</div>
}
const portalDestination = document.getElementById("overlays")!

export default function Modal(props: any) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop onCloseCart={props.onCloseCart} />
          <ModalOverlay>{props.children}</ModalOverlay>,
        </>,
        portalDestination
      )}
    </>
  )
}

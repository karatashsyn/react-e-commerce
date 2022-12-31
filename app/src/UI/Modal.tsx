import React, { useState } from "react"
import ReactDOM from "react-dom"

const Backdrop = (props: any) => {
  return <div className='modal-backdrop' onClick={props.onCloseCart}></div>
}

const ModalOverlay = (props: any) => {
  return <div className='modal-overlay'>{props.children}</div>
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

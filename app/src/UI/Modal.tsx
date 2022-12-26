import React, { useState } from "react"
import ReactDOM from "react-dom"

const Backdrop = () => {
  return <div className='modal-backdrop'></div>
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
          <Backdrop />
          <ModalOverlay>{props.children}</ModalOverlay>,
        </>,
        portalDestination
      )}
    </>
  )
}

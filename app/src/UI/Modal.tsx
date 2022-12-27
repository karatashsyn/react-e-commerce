import React, { useState } from "react"
import ReactDOM from "react-dom"

const Backdrop = ({ onCloseModal }: any) => {
  return <div className='modal-backdrop' onClick={onCloseModal}></div>
}

const ModalOverlay = (props: any) => {
  return <div className='modal-overlay'>{props.children}</div>
}
const portalDestination = document.getElementById("overlays")!

export default function Modal(props: any, { onCloseModal }: any) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop onCloseModal={onCloseModal} />
          <ModalOverlay>{props.children}</ModalOverlay>,
        </>,
        portalDestination
      )}
    </>
  )
}

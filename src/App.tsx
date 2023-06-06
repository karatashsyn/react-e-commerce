import React, { useEffect, useRef, useState } from "react"
import Cart from "./Components/Cart"
import HomePage from "./Pages/Home"
import { cartActions } from "./store"
import { useDispatch } from "react-redux"
import { Product } from "./Types/Product"
import SnackBar from "./Components/UI/SnackBar/SnackBar"

function App() {
  const [cartShown, setCartShown] = useState(false)
  const [actionResponse, setActionResponse] = useState<Response>({
    message: null,
    success: null,
  })
  type Response = {
    message: string | null
    success: boolean | null
  }

  const dispatch = useDispatch()
  const snackBarRef = useRef<any>(null)

  const showCartHandler = () => {
    setCartShown(true)
  }
  const hideCartHandler = () => {
    setCartShown(false)
  }

  const addToCart = (product: Product) => {
    try {
      dispatch(cartActions.addToCart(product))
      setActionResponse({
        message: "Product added succesfully!",
        success: true,
      })
    } catch (error) {
      setActionResponse({ message: "Error Occured!", success: false })
    }
  }

  const deleteFromCart = (product: Product) => {
    dispatch(cartActions.deleteFromCart(product))
    // setActionResponse({message:'Product deleted succesfully!', success:true})
  }

  useEffect(() => {
    if (snackBarRef.current && actionResponse) {
      snackBarRef.current!.handleShow(actionResponse)
    }
  }, [actionResponse])

  const cartHandlers = {
    showCartHandler,
    hideCartHandler,
  }

  const productActions = {
    deleteFromCart,
    addToCart,
  }

  return (
    <>
      <div className='App'>
        <SnackBar
          ref={snackBarRef}
          message={actionResponse!.message!}
          succes={actionResponse.success}
        />
        {cartShown ? <Cart onClick={hideCartHandler} /> : <></>}
        <HomePage cartHandlers={cartHandlers} productActions={productActions} />
      </div>
    </>
  )
}

export default App

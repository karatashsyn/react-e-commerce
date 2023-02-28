import React, { useState } from "react"
import Cart from "./Components/Cart"
import HomePage from "./Pages/Home"

function App() {
  const [cartShown, setCartShown] = useState(false)

  const showCartHandler = () => {
    setCartShown(true)
  }
  const hideCartHandler = () => {
    setCartShown(false)
  }

  const cartHandlers = {
    showCartHandler,
    hideCartHandler,
  }

  return (
    <>
      <div className='App'>
        {cartShown ? <Cart onClick={hideCartHandler} /> : <></>}
        <HomePage cartHandlers={cartHandlers} />
      </div>
    </>
  )
}

export default App

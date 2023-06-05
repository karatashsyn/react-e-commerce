import ".././Styles/global.css"
import Filters from "./../Components/Filters"
import ProductsBox from "../Components/Products"
import { useSelector } from "react-redux/es/hooks/useSelector"
import Navbar from "../Components/Navbar"
import styles from "./home.module.css"
import { useRef, useState, useEffect } from "react"
export default function Home({ cartHandlers }: any) {
  const cartProducts = useSelector((state: any) => state.cart)

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)

  const navBarRef = useRef<any>(null)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    console.log(currentScrollPos)

    if (navBarRef.current) {
      if (prevScrollPos < currentScrollPos && currentScrollPos > 100) {
        navBarRef.current!.style.top = "-6rem"
      } else {
        navBarRef.current!.style.top = "0rem"
      }
    }
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])

  return (
    <>
      <div className={styles.splitter}>
        <div className={styles.navBarContainer} ref={navBarRef}>
          <Navbar cartProducts={cartProducts} cartHandlers={cartHandlers} />
        </div>
        <div className={styles.productsPart}>
          <ProductsBox />
        </div>
      </div>
    </>
  )
}

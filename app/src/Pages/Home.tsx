import ".././Styles/global.css"
import Filters from "./../Components/Filters"
import ProductsBox from "../Components/Products"
import { useSelector } from "react-redux/es/hooks/useSelector"
import Navbar from "../Components/Navbar"
import styles from "./home.module.css"
export default function Home({ cartHandlers }: any) {
  const cartProducts = useSelector((state: any) => state.cart)

  return (
    <>
      <div className={styles.splitter}>
        <div className={styles.right}>
          <Navbar cartProducts={cartProducts} cartHandlers={cartHandlers} />
          <div className={styles.productsPart}>
            <ProductsBox />
          </div>
        </div>
      </div>
    </>
  )
}

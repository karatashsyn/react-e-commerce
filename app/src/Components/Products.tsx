import { useRef, useState, useCallback } from "react"
import useSearchProducts from "../Hooks/useSearchProducts"
import { Product } from "../Types/Product"
import ProductCard from "./ProductCard"
import Loading from "./UI/Loading"
import styles from "./products.module.css"
export default function ProductsBox() {
  const [pageNumber, setPageNumber] = useState(1)
  const { products, loading, hasMore, error } = useSearchProducts(
    pageNumber,
    setPageNumber
  )

  const observer = useRef()

  const lastProduct = useCallback(
    (node: any) => {
      if (loading || !hasMore) return
      //@ts-ignore
      if (observer.current) observer.current.disconnect() //Disconnect the intersection observer frtom the prev last element.

      //@ts-ignore

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting)
          setPageNumber((pageNumber) => pageNumber + 1)
      })
      //@ts-ignore
      if (node) observer.current!.observe(node)
    },
    [loading, hasMore]
  )

  if (error) return <h1>Error Occured... </h1>
  else
    return (
      <>
        <div className={styles.resultsInfo}> {products.length} Results</div>
        <div className={styles.fixedFrame}>
          <div className={styles.productsContainer}>
            {products.map((p: Product, index: number) => {
              if (products.length === index + 1) {
                return (
                  <div key={p.id} ref={lastProduct}>
                    <ProductCard product={p} />
                  </div>
                )
              } else {
                return <ProductCard key={p.id} product={p} />
              }
            })}
          </div>
        </div>
        {loading ? <Loading /> : null}
      </>
    )
  // }
}

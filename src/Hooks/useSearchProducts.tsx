import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { DummyAPIProductRepository } from "../Repository/Concrete/DummyAPI/DummyAPIProductRepository"
import { Product } from "../Types/Product"
import { ProductsResult } from "../Types/ProductsResult"
// import { JsonProductRepository } from "../Repository/Concrete/Local/JsonProductRepository"

export default function useSearchProducts(
  pageNumber: number,
  setPageNumber: any
) {
  const productService = new DummyAPIProductRepository()
  const emptyProductArray: Array<Product> = []
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [products, setProducts] = useState(emptyProductArray)
  const [hasMore, setHasMore] = useState(false)
  const filter = useSelector((state: any) => state.filter)

  useEffect(() => {
    setPageNumber(1)
  }, [setPageNumber, filter])

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      productService.get(filter, pageNumber).then((res: ProductsResult) => {
        const freshProducts =
          pageNumber === 1 ? res.products : [...products, ...res.products]
        setProducts(freshProducts)

        setLoading(false)

        if (res.total > freshProducts.length) setHasMore(true)
        else setHasMore(false)
      })
    } catch (error) {
      setError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, filter])

  return { loading, error, products, hasMore }
}

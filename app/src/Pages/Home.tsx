import ".././Styles/home.css"
import React from "react"
import SearchBar from "../Components/SearchBar"
import PriceFilter from "../Components/PriceFilter"
import BrandFilter from "../Components/BrandFilter"
import { useState, useEffect } from "react"
import { Product } from "../Types/Product"
import ProductsBox from "./../Components/ProductsBox"
import { productFilter } from "../Types/ProductFilter"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { JsonProductRepository } from "../Repository/Concrete/FromJson/JsonProductRepository"
import FilterBtn from "../Components/FilterBtn"
import { ApiProductRepository } from "../Repository/Concrete/ProductApi/ApiProductRepository"

export default function Home({ cartHandlers }: any) {
  const emptyProductArray: Array<Product> = []
  const filter: productFilter = useSelector((state: any) => state.filter)
  const cartProducts = useSelector((state: any) => state.cart)
  const productService = new ApiProductRepository()
  const [allProducts, setAllProducts] = useState(emptyProductArray)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(filter)
    searchProducts()
  }, [])

  const searchProducts = async () => {
    setLoading(true)
    const res = await productService.getAll()
    // const res = await productService.getByFilter(filter)
    setLoading(false)
    setAllProducts(res)
  }

  return (
    <>
      <div className='home__splitter'>
        <div className='home__left'>
          <div className='home__filters-title'>Filters</div>
          <div className='home__filters-container'>
            <PriceFilter />
            <BrandFilter />
            <FilterBtn applyFilter={searchProducts} />
          </div>
        </div>
        <div className='home__right'>
          <div className='home__navbar'>
            <SearchBar searchProducts={searchProducts} />
            <div
              className='home__cart-btn'
              onClick={cartHandlers.showCartHandler}
            >
              Cart
              <div className='cart-btn__badge'>{cartProducts.length}</div>
            </div>
          </div>
          <ProductsBox allProducts={allProducts} loading={loading} />
        </div>
      </div>
    </>
  )
}

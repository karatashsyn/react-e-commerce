import React from 'react'
import SearchBar from '../Components/SearchBar'
import PriceFilter from '../Components/PriceFilter'
import BrandFilter from '../Components/BrandFilter'
import   '.././Styles/home.css'
import ProductsBox from './../Components/ProductsBox'



export default function Home() {
    
  return (
    <>
        <div className="home__splitter">
            <div className="home__left">
                <div className="home__filters-title">Filters</div>
                <div className="home__filters-container">
                    <PriceFilter/>
                    <BrandFilter/>
                    <button className='home__apply-filter-btn'>Apply Filter</button>
                </div>
            </div>
            <div className="home__right">
                <div className="home__navbar">
                    <SearchBar/>
                    <div className="home__cart-btn">
                        Go to cart
                        <div className="cart-btn__badge">0</div>
                    </div>
                </div>
            <ProductsBox/>
            </div>
            
        </div>
    </>
  )
}

import React from 'react'
import SearchBar from '../Components/SearchBar'
import PriceFilter from '../Components/Filters/PriceFilter'
import BrandFilter from '../Components/Filters/BrandFilter'
import   '.././Styles/home.css'
import ProductsBox from './../Components/ProductsBox'
export default function Home() {
    
  return (
    <body>
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
                    <button className="home_cart-btn"></button>
                </div>
            <ProductsBox/>
            </div>
            
        </div>
    </body>
  )
}

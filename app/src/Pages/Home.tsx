import React from 'react'
import SearchBar from '../Components/SearchBar'
import PriceFilter from '../Components/Filters/PriceFilter'
import BrandFilter from '../Components/Filters/BrandFilter'
import './Home.css'
export default function Home() {
  return (
    <body>
        <div className="splitter">
            <div className="left">
                <div className="filters-container">
                    <PriceFilter/>
                    <BrandFilter/>
                    <button>Apply Filter</button>
                </div>
            </div>
            <div className="right">
                <div className="navbar">
                    <SearchBar/>
                    <button className="cart-btn"></button>
                </div>
                <div className="products-container"></div>
                <div className="pagination-buttons-container">
                    <button className='prev-page'></button>
                    <button className='next-page'></button>
                </div>
            </div>
            
        </div>
    </body>
  )
}

import React from 'react'

export default function PriceFilter() {
  return (<>
      <p>Price Range</p>
      <div className='home__price-inputs-container'>
    <input type={'number'} className='home__lowest-price' ></input>
    <span>-</span>
    <input type={'number'} className='home__highest-price'></input>
    </div>
  </>
  )
}

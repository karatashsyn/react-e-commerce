import React from 'react'

export default function PriceFilter() {
  return (
    <div className='price-inputs-container'>
    <input type={'number'} className='price-inputs-container__lowest-price' ></input>
    <input type={'number'} className='price-inputs-container__highest-price'></input>
    </div>
  )
}

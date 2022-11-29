import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { filterActions } from '../store'

export default function PriceFilter({setFilter}:any) {
  // const dispatch =  useDispatch();
  const [range,setRange]  = useState([0,1000]);

  // useEffect(()=>{
    // dispatch(filterActions.updatePriceRange(range))
  // },[range,dispatch])


  return (<>
      <p>Price Range</p>
      <div className='home__price-inputs-container'>
    <input type={'number'} className='home__lowest-price' onChange={(e)=>{
      e.preventDefault();
   
    }} ></input>
    <span>-</span>
    <input type={'number'} className='home__highest-price'  onChange={(e)=>{
      e.preventDefault();
      setRange([range[0], +e.target.value])
    }}></input>
    </div>
  </>
  )
}

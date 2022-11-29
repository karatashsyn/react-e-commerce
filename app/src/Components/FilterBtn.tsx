import React from 'react'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { JsonProductRepository } from '../Repository/Concrete/FromJson/JsonProductRepository'

export default function FilterBtn() {
    const productService = new JsonProductRepository()
    // const currentFilter = useSelector((state:any)=> state.filter.filter)

    // const applyFilter = () =>{
    //     productService.getByFilter(currentFilter)
    // }

  return (
    <>
    <button className='home__apply-filter-btn'>Apply Filter</button>
    </>
    
  )
}
import React from "react"

import { useSelector } from "react-redux/es/hooks/useSelector"
import { JsonProductRepository } from "../Repository/Concrete/FromJson/JsonProductRepository"

export default function FilterBtn({ applyFilter }: any) {
  const productService = new JsonProductRepository()

  // const currentFilter = useSelector((state:any)=> state.filter.filter)

  // const applyFilter = () =>{
  //     productService.getByFilter(currentFilter)
  // }

  return (
    <>
      <div className='apply-filter-btn-container'>
        <button className='home__apply-filter-btn' onClick={applyFilter}>
          Apply Filter
        </button>
      </div>
    </>
  )
}

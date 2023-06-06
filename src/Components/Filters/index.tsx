import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { filterActions } from "../../store"
import BrandFilter from "./BrandFilter"
import FilterBtn from "./ApplyFilter"
import PriceFilter from "./PriceFilter"

export default function Filters() {
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState([0, 0])
  const dispatch = useDispatch()

  const handleApplyFilter = () => {
    dispatch(filterActions.updateBrandFilter(selectedBrands))
    dispatch(filterActions.updatePriceRange(priceRange))
  }
  return (
    <div>
      <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      <BrandFilter
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />
      <FilterBtn onClick={handleApplyFilter} />
    </div>
  )
}

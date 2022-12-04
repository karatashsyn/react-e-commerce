import React, { FormEvent, HtmlHTMLAttributes, useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterActions } from "../store"

export default function SearchBar({ searchProducts }: any) {
  const dispatch = useDispatch()
  const [searchKey, setSearchKey] = useState("")

  const search = () => {
    dispatch(filterActions.updateSearchKeyFilter(searchKey))
    searchProducts()
  }

  const handleSearchinng = (e: React.FormEvent) => {
    e.preventDefault()
    search()
  }

  // useEffect(()=>{
  //   dispatch(filterActions.updateSearchKeyFilter(searchKey))
  // },[searchKey,dispatch])

  return (
    // <div className='home__search-bar-box'>
    <form
      className='home__search-form'
      onSubmit={(e) => {
        handleSearchinng(e)
      }}
    >
      <input
        className='home__search-input'
        type='text'
        onChange={(e) => setSearchKey(e.target.value)}
      />
    </form>
    // </div>
  )
}

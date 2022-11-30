import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterActions } from '../store'

export default function SearchBar({fetchData}:any) {
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState('')
    console.log(filterActions.updateBrandFilter);
    
    // useEffect(()=>{
    //   dispatch(filterActions.updateSearchKeyFilter(searchKey))
    // },[searchKey,dispatch])
  return (

    <div className='home__search-bar-box'>
        <input className='home__search-input' type="text" onChange={(e)=>setSearchKey(e.target.value)} onSubmit={fetchData}/>
    </div>


  )
}
import React from 'react'
import { useState } from 'react'

export default function SearchBar(props:any) {
    const [searchKey, setSearchKey] = useState('')
  return (

    <div className='home__search-bar-box'>
        <input className='home__search-input' type="text" onChange={(e)=>setSearchKey(e.target.value)} onSubmit={props.searchForProducts}/>
    </div>


  )
}
import React from 'react'
import { useState } from 'react'

export default function SearchBar(props:any) {
    const [searchKey, setSearchKey] = useState('')
  return (

    <div>
        <input type="text" onChange={(e)=>setSearchKey(e.target.value)} onSubmit={props.searchForProducts}/>
    </div>


  )
}
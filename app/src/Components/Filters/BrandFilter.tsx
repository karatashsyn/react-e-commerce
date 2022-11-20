import React, { useMemo, useState } from 'react'
import { Company } from '../../Types/Company'
import isIncluding from '../../util/isSelected'
export default function BrandFilter(props:any) {
    const emptyCompanyArray:Array<Company> = []
    const [selectedCompanies,setSelectedCompanies] = useState(emptyCompanyArray)


  const chooseBrandHandler = (clickedCompany:Company) =>{
    if(isIncluding(selectedCompanies, clickedCompany)) {
        setSelectedCompanies(selectedCompanies.filter((c:Company)=>c!==clickedCompany))
    }
    else{
        setSelectedCompanies([...selectedCompanies,clickedCompany])
    }
  } 


  return (
    <>
    <div className='brands-container'>
        {props.allCompanies.map( (c:Company)=>(<div onClick={()=>chooseBrandHandler(c)} key={c.account}
        className={`filters-container__brand-box ${isIncluding(selectedCompanies,c)? '--selected':''}`}>{c.name}</div>))}
    </div>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Company } from '../Types/Company'
import isIncluding from '../util/isSelected'
import { JsonCompanyRepository } from '../Repository/Concrete/FromJson/JsonCompanyRepository'

export default function BrandFilter() {
const emptyCompanyArray:Array<Company> = []
const [selectedCompanies,setSelectedCompanies] = useState(emptyCompanyArray)
const [allCompanies, setAllCompanies] = useState(emptyCompanyArray)
const [brandFilterOpened, setBrandFilterOpened] = useState(false)
const companyService = new JsonCompanyRepository()

const brandsToggleHandler = ()=>{
  setBrandFilterOpened(!brandFilterOpened)
}

const fetchCompanies = async()=>{
  const allCompanies = await companyService.getAll()
  setAllCompanies(allCompanies
    )
}

useEffect(()=>{
  fetchCompanies()
}, [])

const chooseBrandHandler = (clickedCompany:Company) =>{
  console.log('selecteds:' + selectedCompanies);
  
    if(isIncluding(selectedCompanies, clickedCompany)) {
        setSelectedCompanies(selectedCompanies.filter((c:Company)=>c!==clickedCompany))
    }
    else{
        setSelectedCompanies([...selectedCompanies,clickedCompany])
    }
  } 

  return (
    <>
    <button className='home__brand-filters-opener' onClick={brandsToggleHandler}>{'Brands'}  {brandFilterOpened ? '':'►'}</button>
    <div className={`home__brands-container ${brandFilterOpened ? '' : '--closed'}`}>
        {
            allCompanies.map( (c:Company)=>(<div onClick={()=>chooseBrandHandler(c)} key={c.account}
            className={
              
              
              
              'filters-container__brand-box'}>{c.name + `${isIncluding(selectedCompanies,c)? '✔️' : ''}`}</div>))
          }    
    </div>
    </>
  )
}

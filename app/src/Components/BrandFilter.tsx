import React, { useEffect, useState } from "react"
import { Company } from "../Types/Company"
import isIncluding from "./../util/isSelected"
import { JsonCompanyRepository } from "../Repository/Concrete/FromJson/JsonCompanyRepository"
import { useDispatch } from "react-redux/es/hooks/useDispatch"
import { filterActions } from "../store"
import { useSelector } from "react-redux"

export default function BrandFilter({ setFilter }: any) {
  const emptyCompanyArray: Array<Company> = []
  const [selectedCompanies, setSelectedCompanies] = useState(emptyCompanyArray)
  const [allCompanies, setAllCompanies] = useState(emptyCompanyArray)
  const dispatch = useDispatch()
  const companyService = new JsonCompanyRepository()
  // const filter = useSelector((state: any) => state.filter)

  const fetchCompanies = async () => {
    const allCompanies = await companyService.getAll()
    setAllCompanies(allCompanies)
  }

  useEffect(() => {
    dispatch(filterActions.updateBrandFilter(selectedCompanies))
  }, [selectedCompanies, dispatch])

  useEffect(() => {
    console.log(selectedCompanies)
  }, [selectedCompanies])

  useEffect(() => {
    fetchCompanies()
  }, [])

  const chooseBrandHandler = (clickedCompany: Company) => {
    if (isIncluding(selectedCompanies, clickedCompany)) {
      setSelectedCompanies(
        selectedCompanies.filter((c: Company) => c !== clickedCompany)
      )
    } else {
      setSelectedCompanies([...selectedCompanies, clickedCompany])
    }

    // console.log('selecteds:' + selectedCompanies.map(c=>c.name));
  }

  return (
    <>
      <p className='home__brand-filters-opener'>Brands</p>
      <div className='home__brands-container'>
        {allCompanies.map((c: Company) => (
          <div
            onClick={() => chooseBrandHandler(c)}
            key={c.account}
            className={`filters-container__brand-box ${
              isIncluding(selectedCompanies, c) ? "--selected" : ""
            } `}
          >
            {c.name}
          </div>
        ))}
      </div>
    </>
  )
}

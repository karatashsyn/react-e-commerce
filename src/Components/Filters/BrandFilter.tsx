import React, { useCallback, useEffect, useState } from "react"
import { Company } from "../../Types/Company"
import { JsonCompanyRepository } from "../../Repository/Concrete/Local/LocalCompanyRepository"
import styles from "./brandFilter.module.css"

export default function BrandFilter({
  selectedBrands,
  setSelectedBrands,
}: any) {
  const emptyCompanyArray: Array<Company> = []
  const [allCompanies, setAllCompanies] = useState(emptyCompanyArray)

  const fetchCompanies = useCallback(async () => {
    const companyService = new JsonCompanyRepository()
    const allCompanies = await companyService.get("")
    setAllCompanies(allCompanies)
  }, [])

  useEffect(() => {
    fetchCompanies()
  }, [fetchCompanies])

  const chooseBrandHandler = (clickedCompany: Company) => {
    if (selectedBrands.includes(clickedCompany)) {
      setSelectedBrands(
        selectedBrands.filter((c: Company) => c !== clickedCompany)
      )
    } else {
      setSelectedBrands([...selectedBrands, clickedCompany])
    }
  }

  return (
    <>
      <p className={styles.brandsTitle}>Brands</p>
      <div className={styles.brandsContainer}>
        {allCompanies.map((c: Company) => (
          <div
            onClick={() => chooseBrandHandler(c)}
            key={c.id}
            className={
              selectedBrands.includes(c)
                ? `${styles.brandBox} ${styles.selected}`
                : `${styles.brandBox}`
            }
          >
            {c.name}
          </div>
        ))}
      </div>
    </>
  )
}

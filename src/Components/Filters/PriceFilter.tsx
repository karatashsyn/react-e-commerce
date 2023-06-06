import styles from "./priceFilter.module.css"

export default function PriceFilter({ priceRange, setPriceRange }: any) {
  const handleMin = () => {
    return (e: any) => {
      setPriceRange((range: any) => [e.target.value, range[1]])
    }
  }

  const handleMax = () => {
    return (e: any) => {
      setPriceRange((range: any) => [range[0], e.target.value])
    }
  }

  return (
    <>
      <p className={styles.priceTitle}>Price Range</p>
      <div className={styles.inputsContainer}>
        <input
          type='number'
          className={styles.lowest}
          onChange={handleMin()}
        ></input>
        <input
          type='number'
          className={styles.highest}
          onChange={handleMax()}
        ></input>
      </div>
    </>
  )
}

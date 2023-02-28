import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterActions } from "../store"
import styles from "./searchBar.module.css"
export default function SearchBar() {
  const dispatch = useDispatch()
  const [searchKey, setSearchKey] = useState("")

  const search = () => {
    dispatch(filterActions.updateSearchKeyFilter(searchKey))
  }

  const handleSearching = () => {
    return (e: React.FormEvent) => {
      e.preventDefault()
      search()
    }
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSearching()}>
      <input
        className={styles.searchInput}
        type='text'
        placeholder='Search for products, brands or category...'
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <div className={styles.iconContainer}>
        <img src='assets/Search.svg' alt='' />
      </div>
    </form>
    // </div>
  )
}

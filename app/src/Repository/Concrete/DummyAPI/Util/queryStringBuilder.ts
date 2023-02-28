import { productFilter } from "../../../../Types/ProductFilter"

const queryStringBuilder = (filter: productFilter, pageNumber: number) => {
  let qString = ""
  if (!filter) {
    qString = ""
  } else if (filter.category) {
    qString = `categories/${filter.category}`
  } else {
    qString = `search?q=${filter.searchKey}`
  }

  qString += `&limit=${filter.limit}&skip=${filter.limit * (pageNumber - 1)}`
  return qString
}

export default queryStringBuilder

import { Company } from "./Company"

export type productFilter = {
  searchKey: string
  category: string
  brands: Array<Company>
  priceRange: Array<number>
  limit: number
}

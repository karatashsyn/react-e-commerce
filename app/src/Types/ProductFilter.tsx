import { Company } from "./Company"

export type productFilter = {
  searckey: string
  category: string
  tags: Array<string>
  brands: Array<Company>
  priceRange: Array<number>
}

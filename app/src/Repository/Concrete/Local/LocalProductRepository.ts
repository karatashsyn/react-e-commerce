import { Product } from "../../../Types/Product"
import { productFilter } from "../../../Types/ProductFilter"
import filters from "./Util/Filters"
import jsonProducts from "../../LocalData/items.json"
import { IProductRepository } from "../../Abstract/IProductRepository"
import { ProductsResult } from "../../../Types/ProductsResult"
export class JsonProductRepository implements IProductRepository {
  async get(filter: productFilter, page: number): Promise<ProductsResult> {
    const rawResult: Array<Product> = jsonProducts.filter((p) => {
      return (
        filters.filterByBrands(p, filter.brands) &&
        filters.filterByPrice(p.price, filter.priceRange) &&
        (filters.tagsRegexMatch(p.tags, filter.searchKey) ||
          filters.filterByRegex(p.name, filter.searchKey))
      )
    })

    return {
      products: rawResult.slice(filter.limit * (page - 1), filter.limit * page),
      total: rawResult.length,
    }
  }

  async show(id: number) {
    return jsonProducts[id]
  }
}

import { Product } from "../../../Types/Product"
import { IProductRepository } from "../../Abstract/IProductRepository"
import { productFilter } from "../../../Types/ProductFilter"
import queryStringBuilder from "./Util/queryStringBuilder"
import { ProductsResult } from "../../../Types/ProductsResult"

export class DummyAPIProductRepository implements IProductRepository {
  async get(filter: productFilter, page: number): Promise<ProductsResult> {
    const url =
      "https://dummyjson.com/products/" + queryStringBuilder(filter, page)

    const res = await fetch(url)
    const apiData = await res.json()
    const products: Array<Product> = apiData.products.map((p: any) => {
      return {
        id: p.id,
        name: p.title,
        description: p.description,
        price: p.price,
        image: p.images[0],
        tags: [],
        type: p.category,
        brand: p.brand,
        slug: "",
        rating: p.rating,
      }
    })
    return {
      products,
      total: apiData.total,
    }
  }
  async show(id: number): Promise<Product> {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const apiData = await res.json()
    return apiData
  }
}

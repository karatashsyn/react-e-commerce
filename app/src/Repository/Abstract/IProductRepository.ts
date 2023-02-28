import { Product } from "../../Types/Product"
import { ProductsResult } from "../../Types/ProductsResult"
export interface IProductRepository {
  get(filter: any, page: number): Promise<ProductsResult>
  show(id: number): Promise<Product>
}

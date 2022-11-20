import { Product } from "../../../Types/Product";
import { IProductRepository } from "../../Abstract/IProductRepository";
import jsonProducts from './../../LocalData/items.json'

export class ProductRepository implements IProductRepository<Product>{
    getAll(filter: string): Product[] {
        if(!filter){
            const allProducts:Array<Product> = jsonProducts.map((p)=>{ return { 
                name:p.name,
                description:p.description,
                price:p.price,
                image:'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg',
                tags:p.tags,
                type:p.itemType,
                brand:p.manufacturer,
                slug:p.slug,
            }}
            )

            return allProducts;
        }
        else{
            return []// Here will be applied
        }

    }

}
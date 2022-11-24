import { Product } from "../../../Types/Product";
import { IRepository } from "../../Abstract/IRepository";
import { productApiResult } from "./Types/productsResult";

export class ApiProductRepository implements IRepository<Product>{


    async get(id: string): Promise<Product> {
        return {name: "string",
            description: "string",
            price: 0,
            image: "",
            tags: [''],
            type: '',
            brand: '',
            slug: '',
        }
    }
    async getAll(): Promise<Product[]> {
        const res = await fetch('https://dummyjson.com/products')
        const apiData = await res.json();
        const returnedData = apiData.products.map((p:any)=>{
        return {
            name:p.title,
            description:p.description,
            price:p.price,
            image: p.images[0],
            tags: [],
            type: p.category,
            brand: p.brand,
            slug: ''
            }
        })
        
        return returnedData
   
    }




    async getByFilter(filter: object): Promise<Product[]> {
        return [] 
    }



}

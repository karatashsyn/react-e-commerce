import { throws } from "assert";
import { Product } from "../../../Types/Product";
import { IRepository } from "../../Abstract/IRepository";
import jsonProducts from './../../LocalData/items.json'

export class ProductRepository implements IRepository<Product>{

    
    getByFilter(filter: object): Product[] {
        throw new Error("Method not implemented.");
    }

    get(addedNum: string): Product {
        jsonProducts.forEach(element => {
            if(element.added+''=== addedNum){
                return element
            }
              
        });
        return {
            name: "string",
            description: "string",
            price: 0,
            image: "string",
            tags: [],
            type: "",
            brand: "",
            slug: "",
        }
    }


    getAll(): Product[] {
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

}
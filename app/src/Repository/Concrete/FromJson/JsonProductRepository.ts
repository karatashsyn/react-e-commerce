import { error } from "console";
import { Product } from "../../../Types/Product";
import { productFilter } from "../../../Types/ProductFilter";
import filterByBrands from "./Filters/filterByBrand";
import filterByRegex from "./Filters/filterByRegex"
import tagsRegexMatch from "./Filters/tagsRegexMatch";
import { IRepository } from "../../Abstract/IRepository";
import jsonProducts from '../../LocalData/items.json'

export class JsonProductRepository implements IRepository<Product>{


    async getByFilter(filter: productFilter): Promise<Product[]> {
        console.log("laa");
        
        const allProducts = await this.getAll();
    //    const filteredProducts:any = allProducts.filter((p:any) => 
    //     (tagsRegexMatch(p.tags, filter.searckey ) && filterByBrands(p, filter.brands) && filterByRegex(p.name, filter.searckey)) 
    //     )
       
    //     console.log(filteredProducts);
        
        return allProducts;
    }

    async get(addedNum: string): Promise<Product> {
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


    async getAll(): Promise<Product[]> {
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
            return allProducts
    }

}
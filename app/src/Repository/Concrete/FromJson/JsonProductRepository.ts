import { error } from "console";
import { Product } from "../../../Types/Product";
import { productFilter } from "../../../Types/ProductFilter";
import filterByBrands from "./Filters/filterByBrand";
import filterByRegex from "./Filters/filterByRegex"
import tagsRegexMatch from "./Filters/tagsRegexMatch";
import { IRepository } from "../../Abstract/IRepository";
import jsonProducts from '../../LocalData/items.json'
import filterByPrice from "./Filters/filterByPrice";

export class JsonProductRepository implements IRepository<Product>{


    async getByFilter(filter: productFilter): Promise<Product[]> {
        const allProducts = await this.getAll(filter)
    //     // tagsRegexMatch(p.tags, filter.searckey ) && filterByBrands(p, filter.brands) &&
    //    const filteredProducts:any = allProducts.filter((p:any) => 
    //     (filterByRegex(p.name, filter.searckey)) 
    //     )
    //    console.log("filteredss");
       
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


    async getAll(filter:productFilter): Promise<Product[]> {
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
            const filteredProducts:Product[] = allProducts.filter(p => {return (( filterByBrands(p,filter.brands) &&  filterByPrice(p.price, filter.priceRange)) && (tagsRegexMatch(p.tags, filter.searckey) || filterByRegex(p.name, filter.searckey)))}) 
            
            return filteredProducts
    }

}
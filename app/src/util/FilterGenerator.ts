import type { productFilter } from "../Types/ProductFilter"

const filterGenerator = (searchKey:string, tags:string[], brands:string[], category:string, priceRange:Array<number>  ):productFilter =>{
    const filter:productFilter = {searckey:searchKey,tags:tags,brands:brands,category:category, priceRange:priceRange}
    return filter;

}
export default filterGenerator
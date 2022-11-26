import { Product } from "../../../../Types/Product";

const filterByBrands = (p:Product, brands:string[]) =>{
    if(brands.length===0){
        return true;
    }
    else if(brands.includes(p.brand)){
        return true
    }
    else{
        return false
    }
}

export default filterByBrands;
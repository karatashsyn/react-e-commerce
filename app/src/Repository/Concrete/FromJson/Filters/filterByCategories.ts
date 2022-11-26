import { Product } from "../../../../Types/Product";

const filterByCategories = (p:Product,categories:Array<string>) =>{
    let result:boolean = false;

    if(categories.length===0){
        result = true;
    }

    else{
        if (categories.includes(p.type)){
            result = true;
        }
    }


    return result

}
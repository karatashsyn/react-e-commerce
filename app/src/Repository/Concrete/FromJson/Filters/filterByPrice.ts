import { Product } from "../../../../Types/Product";

const filterByPrice = (productPrice:number ,priceRange:number[]) =>{
    let result:boolean = false;

    if(priceRange[0]===0 && priceRange[1]===0){
        result = true;
    }

    else{
        if (productPrice>=priceRange[0] && productPrice<=priceRange[1]){
            result = true;
        }
    }


    return result

}

export default filterByPrice
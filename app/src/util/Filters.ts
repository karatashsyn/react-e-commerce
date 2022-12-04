import { Product } from "../Types/Product";


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

 const filterByCategories = (p:Product,categories:Array<string>) =>{
    let result:boolean = false;

    if(categories.length===0){
        console.log("yeah category is 0");
        
        result = true;
    }

    else{
        if (categories.includes(p.type)){
            result = true;
        }
    }


    return result

}

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

 const filterByRegex = (word:string, stringRegex:string)=>{
    
    const regex = new RegExp(stringRegex.toLowerCase());
    if (stringRegex.length===0){
        return true
    }

    else if(regex.test(word.toLowerCase())){
        return true
    }
    else{
        return false
    }
}


 const tagsRegexMatch = (tags:string[], regexAsString:string)=>{
    
    const regex = new RegExp(regexAsString.toLowerCase())
    let result:boolean = false;

    if(regexAsString.length===0){
        result = true
    }
    
    else{
        tags.forEach(tag => {
            if(regex.test(tag.toLowerCase())){
                result = true
            }
        });
    }
    return result;

}

const filters = {filterByBrands, filterByCategories, filterByPrice, filterByRegex, tagsRegexMatch}

export default filters
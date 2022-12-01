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
export default filterByRegex;
const filterByRegex = (word:string, stringRegex:string)=>{
    const regex = new RegExp(stringRegex);
    if (stringRegex.length===0){
        return true
    }

    else if(regex.test(word)){
        return true
    }
    else{
        return false
    }
}
export default filterByRegex;
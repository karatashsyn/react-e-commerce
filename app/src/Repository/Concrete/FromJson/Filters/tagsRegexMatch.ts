const tagsRegexMatch = (tags:string[], regexAsString:string)=>{
    const regex = new RegExp(regexAsString)
    
    let result:boolean = false;

    if(regexAsString.length===0){
        result = true
    }
    
    else{

        tags.forEach(tag => {
            if(regex.test(tag)){
                result = true
            }
        });
    }
    return result;

}

export default tagsRegexMatch; 
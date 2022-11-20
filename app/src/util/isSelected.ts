 const isIncluding:Function = (arrayForThatItem:Array<any>,itemToBeChecked:any) => {
    if(arrayForThatItem.includes(itemToBeChecked)){return true}
    else{
        return false
    }
}
export default isIncluding
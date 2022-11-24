 export interface IRepository<T> {
    get(id:string):T
    getAll(filter:string) : Array<T>
}
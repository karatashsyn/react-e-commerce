export interface IProductRepository<T> {
    getAll(filter:string) : Array<T>
    
}
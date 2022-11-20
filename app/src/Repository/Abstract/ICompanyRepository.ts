export interface ICompanyRepository<T> {
    get(id:string):T
    getAll(filter:string) : Array<T>
    
}
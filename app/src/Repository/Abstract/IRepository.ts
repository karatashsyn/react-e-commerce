 export interface IRepository<T> {
    get(id:string):Promise<T>
    getAll(filter:object) : Promise<Array<T>>
    getByFilter(filter: object):Promise<Array<T>>
}
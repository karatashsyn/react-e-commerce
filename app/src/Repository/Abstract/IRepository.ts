 export interface IRepository<T> {
    get(id:string):Promise<T>
    getAll() : Promise<Array<T>>
    getByFilter(filter: object):Promise<Array<T>>
}
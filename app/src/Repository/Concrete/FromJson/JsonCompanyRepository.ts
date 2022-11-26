import { Company } from "../../../Types/Company";
import { IRepository } from "../../Abstract/IRepository";
import jsonCompanies from '../../LocalData/companies.json'
export class JsonCompanyRepository implements IRepository<Company>{

    
    async getByFilter(filter: object): Promise<Company[]> {
        return[]
    }
    
    async get(account: string): Promise<Company> {
        return {
            name: "string",
            state: "string",
            account: 0,
            logo: "",
            slug: '',
        }
    }
    async getAll():Promise<Company[]> {
            const allCompanies:Company[] = jsonCompanies.map((c)=>{ return { 
                name:c.name,
                state:c.state,
                slug:c.slug,
                account:c.account,
                logo:'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
            }})
            return allCompanies
    }
}
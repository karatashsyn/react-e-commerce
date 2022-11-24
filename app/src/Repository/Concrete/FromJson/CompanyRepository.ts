import { Company } from "../../../Types/Company";
import { IRepository } from "../../Abstract/IRepository";
import jsonCompanies from './../../LocalData/companies.json'
export class CompanyRepository implements IRepository<Company>{

    
    getByFilter(filter: object): Company[] {
        throw new Error("Method not implemented.");
    }
    
    get(account: string): Company {
        throw new Error("Method not implemented.");
    }
    getAll(): Company[] {
        console.log("heeyy");
        
        console.log(jsonCompanies);
        
            const allCompanies:Array<Company> = jsonCompanies.map((c)=>{ return { 
                name:c.name,
                state:c.state,
                slug:c.slug,
                account:c.account,
                logo:'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
            }}
            )
            return allCompanies;
        
    }
}
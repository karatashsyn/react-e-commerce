import { Company } from "../../../Types/Company";
import { ICompanyRepository } from "../../Abstract/ICompanyRepository";
import jsonCompanies from './../../LocalData/companies.json'
export class CompanyRepositroy implements ICompanyRepository<Company>{
    get(account: string): Company {
        throw new Error("Method not implemented.");
    }
    getAll(filter: string): Company[] {
        if(!filter){
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
        else{
            return []// Here will be applied
        }
    }
}
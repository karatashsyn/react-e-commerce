import { Company } from "../../../Types/Company"
import { ICompanyRepository } from "../../Abstract/ICompanyRepository"
import jsonCompanies from "../../LocalData/companies.json"
export class JsonCompanyRepository implements ICompanyRepository {
  async get(search: string): Promise<Company[]> {
    const allProducts = jsonCompanies.map((company) => {
      return {
        id: company.id,
        name: company.name,
        state: company.state,
        slug: company.slug,
        logo: company.logo,
      }
    })

    return allProducts
  }
  async show(id: number): Promise<Company> {
    return jsonCompanies[id]
  }
}

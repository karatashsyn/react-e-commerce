import { Company } from "../../../Types/Company"

import { ICompanyRepository } from "../../Abstract/ICompanyRepository"
export class DummyAPICompanyRepository implements ICompanyRepository {
  get(search: string): Promise<Company[]> {
    const emptyCompanies: Array<Company> = []
    return new Promise((resolve, reject) => {
      resolve(emptyCompanies)
    })
  }
  show(id: number): Promise<Company> {
    throw new Error("Method not implemented.")
  }
}

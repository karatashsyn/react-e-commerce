import { Company } from "../../Types/Company"

export interface ICompanyRepository {
  get(search: string): Promise<Array<Company>>
  show(id: number): Promise<Company>
}

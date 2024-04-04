import {CatFact} from "./cat-fact.interface";

export interface CatFactsResponse {
  current_page: number,
  data: CatFact[],
  "last_page": number,
  "per_page": number,
  "total": number
}

import {CatFact} from "./cat-fact.interface";

export interface CatFactsResponse {
  data: CatFact[],
  current_page: number,
  last_page: number,
}

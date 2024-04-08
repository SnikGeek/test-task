import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFactsResponse } from '../models/interfaces/cat-facts-response.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatFactsApiService {
  constructor(private http: HttpClient) {}

  getCatFacts(page: number, limit: number = 10): Observable<CatFactsResponse> {
    return this.http.get<CatFactsResponse>(environment.catFactsApiUrl, {
      params: {
        page,
        limit,
      },
    });
  }
}

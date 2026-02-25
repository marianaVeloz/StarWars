import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private baseUrl = 'https://swapi.dev/api';
  private cache = new Map<string, any>();

  constructor(private http: HttpClient) {}

  private getWithCache(url: string): Observable<any> {

    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }

    return this.http.get(url).pipe(
      tap(data => this.cache.set(url, data))
    );
  }

  getPersonById(id: number) {
    return this.getWithCache(`${this.baseUrl}/people/${id}`);
  }

  getPlanetById(id: number) {
    return this.getWithCache(`${this.baseUrl}/planets/${id}`);
  }

  getStarshipById(id: number) {
    return this.getWithCache(`${this.baseUrl}/starships/${id}`);
  }

  getPlanetByUrl(url: string) {
    return this.getWithCache(url);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwapiService {
    //URL de API Star Wars
  private apiUrl = 'https://www.swapi.tech/api';

  constructor(private http: HttpClient) {}

  //Se piden los datos por id y se devuelven los resultados de la API
   
  // Personajes
  getPersonById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/people/${id}`).pipe(
      map(res => res.result.properties)
    );
  }

  // Planetas
  getPlanetById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/planets/${id}`).pipe(
      map(res => res.result.properties)
    );
  }

  // Naves
  getStarshipById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/starships/${id}`).pipe(
      map(res => res.result.properties)
    );
  }

  // Para resolver la URL del planeta (homeworld)
  getPlanetByUrl(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(res => res.result.properties)
    );
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Amizade } from '../model/amizade';

@Injectable({
  providedIn: 'root'
})
export class AmizadeService {
  private apiURL = "http://localhost:8080/api/v1/amizades";

  constructor(private http: HttpClient) {}

  getAmizades(): Observable<Amizade[]> {
    return this.http.get<Amizade[]>(this.apiURL);
  }

  getAmizadeById(id: number | string): Observable<Amizade> {
    return this.http.get<Amizade>(`${this.apiURL}/${id}`);
  }

  saveAmizade(amizade: Amizade): Observable<Amizade> {
    if (amizade.id) {
      return this.http.put<Amizade>(`${this.apiURL}/${amizade.id}`, amizade);
    }
    return this.http.post<Amizade>(this.apiURL, amizade);
  }

  excluirAmizade(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resenha } from '../model/resenha';

@Injectable({
  providedIn: 'root'
})
export class ResenhaService {
  private apiURL = "http://localhost:8080/api/v1/resenhas";

  constructor(private http: HttpClient) {}

  getResenhas(): Observable<Resenha[]> {
    return this.http.get<Resenha[]>(this.apiURL);
  }

  getResenhaById(id: number | string): Observable<Resenha> {
    return this.http.get<Resenha>(`${this.apiURL}/${id}`);
  }

  saveResenha(resenha: Resenha): Observable<Resenha> {
    if (resenha.id) {
      return this.http.put<Resenha>(`${this.apiURL}/${resenha.id}`, resenha);
    }
    return this.http.post<Resenha>(this.apiURL, resenha);
  }

  excluirResenha(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}

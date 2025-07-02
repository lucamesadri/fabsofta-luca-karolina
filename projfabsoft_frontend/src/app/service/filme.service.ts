import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiURL = "http://localhost:8080/api/v1/filmes";

  constructor(private http: HttpClient) {}

  getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.apiURL);
  }

  getFilmeById(id: number | string): Observable<Filme> {
    return this.http.get<Filme>(`${this.apiURL}/${id}`);
  }

  saveFilme(filme: Filme): Observable<Filme> {
    if (filme.id) {
      return this.http.put<Filme>(`${this.apiURL}/${filme.id}`, filme);
    }
    return this.http.post<Filme>(this.apiURL, filme);
  }

  excluirFilme(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }

  saveFilmeComImagem(formData: FormData): Observable<Filme> {
    return this.http.post<Filme>(this.apiURL, formData);
  }
}

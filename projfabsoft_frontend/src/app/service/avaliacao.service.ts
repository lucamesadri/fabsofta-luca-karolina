import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avaliacao } from '../model/avaliacao';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  private apiURL = "http://localhost:8080/api/v1/avaliacoes";

  constructor(private http: HttpClient) {}

  getAvaliacoes(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(this.apiURL);
  }

  getAvaliacaoById(id: number | string): Observable<Avaliacao> {
    return this.http.get<Avaliacao>(`${this.apiURL}/${id}`);
  }

  saveAvaliacao(avaliacao: Avaliacao): Observable<Avaliacao> {
    if (avaliacao.id) {
      return this.http.put<Avaliacao>(`${this.apiURL}/${avaliacao.id}`, avaliacao);
    }
    return this.http.post<Avaliacao>(this.apiURL, avaliacao);
  }

  excluirAvaliacao(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}



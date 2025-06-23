import { Injectable } from '@angular/core';
import { Filme } from '../model/filme';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  apiURL = "http://localhost:8080/api/v1/filmes";

  constructor(private http: HttpClient) { }

  getFilmes() {
    return this.http.get<Filme[]>(this.apiURL);
  }

  saveFilme(filme: Filme) {
    if (filme.id) {
      return this.http.put(this.apiURL + '/' + filme.id, filme);
    }
    return this.http.post(this.apiURL, filme);
  }

  getFilmeById(id: any) {
    return this.http.get<Filme>(this.apiURL + '/' + id);
  }

  excluirFilme(id: any) {
    return this.http.delete<Filme>(this.apiURL + '/' + id);
  }
}

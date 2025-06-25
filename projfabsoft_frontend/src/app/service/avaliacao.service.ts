import { Injectable } from '@angular/core';
import { Avaliacao } from '../model/avaliacao';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  apiURL = "http://localhost:8080/api/v1/avaliacoes"
  constructor(private http:HttpClient) { }

  getAvaliacoes(){
    return this.http.get<Avaliacao[]>(this.apiURL);
  }
  saveAvaliacoes(avaliacao:Avaliacao){
    if(avaliacao.id){
      return this.http.put(this.apiURL + '/' + avaliacao.id, avaliacao);
    }
    return this.http.post(this.apiURL,avaliacao);
  }

  getAvaliacaoById(id: any){
    return this.http.get<Avaliacao>(this.apiURL + '/' + id);
  }

  excluirAvaliacao(id: any){
    return this.http.delete<Avaliacao>(this.apiURL + '/' + id);
  }
}


import { Injectable } from '@angular/core';
import { Amizade } from '../model/amizade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmizadeService {

  apiUrl: string = "http://localhost:8080/api/v1/amizades";


  constructor(private http:HttpClient) { }

  getAmizades(){
    return this.http.get<Amizade[]>(this.apiUrl);
  }
}

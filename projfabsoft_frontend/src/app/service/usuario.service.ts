import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiURL = "http://localhost:8080/api/v1/usuarios"
  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario[]>(this.apiURL);
  }
  saveUsuario(usuario:Usuario){
    return this.http.post(this.apiURL,usuario);
  }
}

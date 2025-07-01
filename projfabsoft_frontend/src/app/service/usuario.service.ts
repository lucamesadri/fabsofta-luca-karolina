import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiURL = "http://localhost:8080/api/v1/usuarios";

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }

  getUsuarioById(id: number | string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiURL}/${id}`);
  }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    if (usuario.id) {
      return this.http.put<Usuario>(`${this.apiURL}/${usuario.id}`, usuario);
    }
    return this.http.post<Usuario>(this.apiURL, usuario);
  }

  excluirUsuario(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
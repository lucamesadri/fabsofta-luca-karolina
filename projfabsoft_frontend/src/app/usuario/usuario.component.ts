import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-usuario',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
  providers: [UsuarioService]
})
export class UsuarioComponent {

  public listaUsuarios:Usuario[] = [];
  constructor(
    private usuarioService:UsuarioService
  ){}

  ngOnInit(): void{
    this.usuarioService.getUsuarios().subscribe(resposta =>{
      this.listaUsuarios = resposta;
    })
  }

}

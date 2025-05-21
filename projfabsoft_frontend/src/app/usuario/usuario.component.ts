import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
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

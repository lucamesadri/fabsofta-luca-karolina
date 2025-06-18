import { Component, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-usuario',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
  providers: [UsuarioService, Router]
})
export class UsuarioComponent {

  public listaUsuarios: Usuario[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private usuarioSelecionado!: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(resposta => {
      this.listaUsuarios = resposta;
    });
  }

  novo() {
    this.router.navigate(['usuarios/novo']);
  }

  alterar(usuario: Usuario) {
    this.router.navigate(['usuarios/alterar', usuario.id]);
  }

  abrirConfirmacao(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.usuarioService.excluirUsuario(this.usuarioSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.usuarioService.getUsuarios().subscribe(
          usuarios => {
            this.listaUsuarios = usuarios;
          }
        );
      },
      error => {
        console.error('Erro ao excluir usuário:', error);
      }
    );
  }
}

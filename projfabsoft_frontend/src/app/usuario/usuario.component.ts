import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {
  public listaUsuarios: Usuario[] = [];
  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private usuarioSelecionado!: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsuarios().subscribe({
      next: resposta => this.listaUsuarios = resposta,
      error: err => {
        console.error('Erro ao carregar usuários:', err);
        this.listaUsuarios = [];
      }
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
    if (this.usuarioSelecionado && this.usuarioSelecionado.id !== undefined) {
      this.usuarioService.excluirUsuario(this.usuarioSelecionado.id).subscribe({
        next: () => {
          this.fecharConfirmacao();
          this.carregarUsuarios();
        },
        error: error => {
          console.error('Erro ao excluir usuário:', error);
        }
      });
    } else {
      console.error('Usuário selecionado ou ID do usuário está indefinido.');
    }
  }

  trackByUsuario(index: number, usuario: Usuario) {
    return usuario.id;
  }
}
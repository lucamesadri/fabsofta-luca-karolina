import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resenha } from '../model/resenha';
import { ResenhaService } from '../service/resenha.service';
import { UsuarioService } from '../service/usuario.service';
import { FilmeService } from '../service/filme.service';
import { Usuario } from '../model/usuario';
import { Filme } from '../model/filme';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-resenha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-resenha.component.html',
  styleUrls: ['./form-resenha.component.css'],
  providers: [ResenhaService, UsuarioService, FilmeService]
})
export class FormResenhaComponent {
  resenha: Resenha = new Resenha();
  usuarios: Usuario[] = [];
  filmes: Filme[] = [];

  constructor(
    private resenhaService: ResenhaService,
    private usuarioService: UsuarioService,
    private filmeService: FilmeService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
    this.filmeService.getFilmes().subscribe(filmes => {
      this.filmes = filmes;
    });

    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.resenhaService.getResenhaById(id).subscribe(resenha => {
        this.resenha = resenha;
      });
    }
  }

  salvar() {
    if (this.resenha.usuario && this.resenha.usuario.id &&
        this.resenha.filme && this.resenha.filme.id) {
      const resenhaParaSalvar = {
        ...this.resenha,
        usuario: { id: this.resenha.usuario.id },
        filme: { id: this.resenha.filme.id }
      };
      this.resenhaService.saveResenha(resenhaParaSalvar).subscribe(() => {
        this.router.navigate(['resenhas']);
      });
    } else {
      alert('Selecione um usuário e um filme.');
    }
  }

  voltar() {
    this.router.navigate(['resenhas']);
  }
}

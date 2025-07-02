import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Avaliacao } from '../model/avaliacao';
import { AvaliacaoService } from '../service/avaliacao.service';
import { UsuarioService } from '../service/usuario.service';
import { FilmeService } from '../service/filme.service';
import { Usuario } from '../model/usuario';
import { Filme } from '../model/filme';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-avaliacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-avaliacao.component.html',
  styleUrls: ['./form-avaliacao.component.css'],
  providers: [AvaliacaoService, UsuarioService, FilmeService]
})
export class FormAvaliacaoComponent {
  avaliacao: Avaliacao = new Avaliacao();
  usuarios: Usuario[] = [];
  filmes: Filme[] = [];

  constructor(
    private avaliacaoService: AvaliacaoService,
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
      this.avaliacaoService.getAvaliacaoById(id).subscribe(avaliacao => {
        this.avaliacao = avaliacao;
      });
    }
  }

  salvar() {
    if (this.avaliacao.usuario && this.avaliacao.usuario.id &&
        this.avaliacao.filme && this.avaliacao.filme.id) {
      this.avaliacao.usuario = { id: this.avaliacao.usuario.id };
      this.avaliacao.filme = { id: this.avaliacao.filme.id };
      this.avaliacaoService.saveAvaliacao(this.avaliacao).subscribe(() => {
        this.router.navigate(['avaliacoes']);
      });
    } else {
      alert('Selecione um usuário e um filme.');
    }
  }

  voltar() {
    this.router.navigate(['avaliacoes']);
  }
}

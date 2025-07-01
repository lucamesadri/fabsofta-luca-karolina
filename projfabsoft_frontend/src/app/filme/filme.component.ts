import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filme } from '../model/filme';
import { FilmeService } from '../service/filme.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-filme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css'],
  providers: [FilmeService]
})
export class FilmeComponent implements OnInit {
  public listaFilmes: Filme[] = [];
  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private filmeSelecionado!: Filme;

  constructor(
    private filmeService: FilmeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarFilmes();
  }

  carregarFilmes() {
    this.filmeService.getFilmes().subscribe({
      next: resposta => this.listaFilmes = resposta,
      error: err => {
        console.error('Erro ao carregar filmes:', err);
        this.listaFilmes = [];
      }
    });
  }

  novo() {
    this.router.navigate(['filmes/novo']);
  }

  alterar(filme: Filme) {
    this.router.navigate(['filmes/alterar', filme.id]);
  }

  abrirConfirmacao(filme: Filme) {
    this.filmeSelecionado = filme;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    if (this.filmeSelecionado && this.filmeSelecionado.id !== undefined) {
      this.filmeService.excluirFilme(this.filmeSelecionado.id).subscribe({
        next: () => {
          this.fecharConfirmacao();
          this.carregarFilmes();
        },
        error: error => {
          console.error('Erro ao excluir filme:', error);
        }
      });
    } else {
      console.error('Filme selecionado ou ID do filme está indefinido.');
    }
  }

  trackByFilme(index: number, filme: Filme) {
    return filme.id;
  }
}

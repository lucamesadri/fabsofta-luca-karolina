import { Component, ElementRef, ViewChild } from '@angular/core';
import { Filme } from '../model/filme';
import { FilmeService } from '../service/filme.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-filme',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './filme.component.html',
  styleUrl: './filme.component.css',
  providers: [FilmeService, Router]
})
export class FilmeComponent {

  public listaFilmes: Filme[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private filmeSelecionado!: Filme;

  constructor(
    private filmeService: FilmeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filmeService.getFilmes().subscribe(resposta => {
      this.listaFilmes = resposta;
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
    this.filmeService.excluirFilme(this.filmeSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.filmeService.getFilmes().subscribe(
          filmes => {
            this.listaFilmes = filmes;
          }
        );
      },
      error => {
        console.error('Erro ao excluir filme:', error);
      }
    );
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { Avaliacao } from '../model/avaliacao';
import { AvaliacaoService } from '../service/avaliacao.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-avaliacao',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './avaliacao.component.html',
  styleUrl: './avaliacao.component.css',
  providers: [AvaliacaoService, Router]
})
export class AvaliacaoComponent {

  public listaAvaliacoes: Avaliacao[] = [];



  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private avaliacaoSelecionado!: Avaliacao;

  constructor(
    private avaliacaoService: AvaliacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.avaliacaoService.getAvaliacoes().subscribe(resposta => {
      this.listaAvaliacoes = resposta;
    });
  }

  novo() {
    this.router.navigate(['avaliacoes/novo']);
  }

  alterar(avaliacao: Avaliacao) {
    this.router.navigate(['avaliacoes/alterar', avaliacao.id]);
  }

  abrirConfirmacao(avaliacao: Avaliacao) {
    this.avaliacaoSelecionado = avaliacao;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.avaliacaoService.excluirAvaliacao(this.avaliacaoSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.avaliacaoService.getAvaliacoes().subscribe(
          avaliacoes => {
            this.listaAvaliacoes = avaliacoes;
          }
        );
      },
      error => {
        console.error('Erro ao excluir avaliavcao:', error);
      }
    );
  }
}

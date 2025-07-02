import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Avaliacao } from '../model/avaliacao';
import { AvaliacaoService } from '../service/avaliacao.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-avaliacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css'],
  providers: [AvaliacaoService]
})
export class AvaliacaoComponent implements OnInit {
  public listaAvaliacoes: Avaliacao[] = [];
  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private avaliacaoSelecionada!: Avaliacao;

  constructor(
    private avaliacaoService: AvaliacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarAvaliacoes();
  }

  carregarAvaliacoes() {
    this.avaliacaoService.getAvaliacoes().subscribe({
      next: resposta => this.listaAvaliacoes = resposta,
      error: err => {
        console.error('Erro ao carregar avaliações:', err);
        this.listaAvaliacoes = [];
      }
    });
  }

  novo() {
    this.router.navigate(['avaliacoes/novo']);
  }

  alterar(avaliacao: Avaliacao) {
    this.router.navigate(['avaliacoes/alterar', avaliacao.id]);
  }

  abrirConfirmacao(avaliacao: Avaliacao) {
    this.avaliacaoSelecionada = avaliacao;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    if (this.avaliacaoSelecionada && this.avaliacaoSelecionada.id !== undefined) {
      this.avaliacaoService.excluirAvaliacao(this.avaliacaoSelecionada.id).subscribe({
        next: () => {
          this.fecharConfirmacao();
          this.carregarAvaliacoes();
        },
        error: error => {
          console.error('Erro ao excluir avaliação:', error);
        }
      });
    } else {
      console.error('Avaliação selecionada ou ID da avaliação está indefinido.');
    }
  }

  trackByAvaliacao(index: number, avaliacao: Avaliacao) {
    return avaliacao.id;
  }
}

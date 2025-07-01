import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resenha } from '../model/resenha';
import { ResenhaService } from '../service/resenha.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-resenha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resenha.component.html',
  styleUrls: ['./resenha.component.css'],
  providers: [ResenhaService]
})
export class ResenhaComponent implements OnInit {
  public listaResenhas: Resenha[] = [];
  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private resenhaSelecionada!: Resenha;

  constructor(
    private resenhaService: ResenhaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarResenhas();
  }

  carregarResenhas() {
    this.resenhaService.getResenhas().subscribe({
      next: resposta => this.listaResenhas = resposta,
      error: err => {
        console.error('Erro ao carregar resenhas:', err);
        this.listaResenhas = [];
      }
    });
  }

  novo() {
    this.router.navigate(['resenhas/novo']);
  }

  alterar(resenha: Resenha) {
    this.router.navigate(['resenhas/alterar', resenha.id]);
  }

  abrirConfirmacao(resenha: Resenha) {
    this.resenhaSelecionada = resenha;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    if (this.resenhaSelecionada && this.resenhaSelecionada.id !== undefined) {
      this.resenhaService.excluirResenha(this.resenhaSelecionada.id).subscribe({
        next: () => {
          this.fecharConfirmacao();
          this.carregarResenhas();
        },
        error: error => {
          console.error('Erro ao excluir resenha:', error);
        }
      });
    } else {
      console.error('Resenha selecionada ou ID da resenha está indefinido.');
    }
  }

  trackByResenha(index: number, resenha: Resenha) {
    return resenha.id;
  }
}

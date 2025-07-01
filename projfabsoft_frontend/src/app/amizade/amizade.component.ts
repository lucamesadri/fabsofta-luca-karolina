import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Amizade } from '../model/amizade';
import { AmizadeService } from '../service/amizade.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-amizade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amizade.component.html',
  styleUrls: ['./amizade.component.css'],
  providers: [AmizadeService]
})
export class AmizadeComponent implements OnInit {
  public listaAmizades: Amizade[] = [];
  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;
  private amizadeSelecionada!: Amizade;

  constructor(
    private amizadeService: AmizadeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarAmizades();
  }

  carregarAmizades() {
    this.amizadeService.getAmizades().subscribe({
      next: resposta => this.listaAmizades = resposta,
      error: err => {
        console.error('Erro ao carregar amizades:', err);
        this.listaAmizades = [];
      }
    });
  }

  novo() {
    this.router.navigate(['amizades/novo']);
  }

  alterar(amizade: Amizade) {
    this.router.navigate(['amizades/alterar', amizade.id]);
  }

  abrirConfirmacao(amizade: Amizade) {
    this.amizadeSelecionada = amizade;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    if (this.amizadeSelecionada && this.amizadeSelecionada.id !== undefined) {
      this.amizadeService.excluirAmizade(this.amizadeSelecionada.id).subscribe({
        next: () => {
          this.fecharConfirmacao();
          this.carregarAmizades();
        },
        error: error => {
          console.error('Erro ao excluir amizade:', error);
        }
      });
    } else {
      console.error('Amizade selecionada ou ID da amizade está indefinido.');
    }
  }

  trackByAmizade(index: number, amizade: Amizade) {
    return amizade.id;
  }
}

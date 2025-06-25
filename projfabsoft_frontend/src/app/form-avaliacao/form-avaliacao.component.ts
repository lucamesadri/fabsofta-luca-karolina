import { Component } from '@angular/core';
import { Avaliacao  } from '../model/avaliacao';
import { AvaliacaoService } from '../service/avaliacao.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-avaliacao',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-avaliacao.component.html',
  styleUrl: './form-avaliacao.component.css',
  providers: [AvaliacaoService, Router]
})
export class FormAvaliacaoComponent {
  avaliacao: Avaliacao = new Avaliacao();

  constructor(
    private avaliacaoService: AvaliacaoService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');

    if (id) {
      this.avaliacaoService.getAvaliacaoById(id).subscribe(avaliacao => {
        this.avaliacao = avaliacao;
      });
    }
  }

salvar() {
  console.log('this.avaliacao enviado:', this.avaliacao);
  this.avaliacaoService.saveAvaliacoes(this.avaliacao).subscribe({
    next: () => this.router.navigate(['avaliacoes']),
    error: err => console.error('Erro no salvar:', err)
  });
}

}

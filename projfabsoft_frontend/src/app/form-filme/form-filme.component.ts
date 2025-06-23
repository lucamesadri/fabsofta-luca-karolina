import { Component } from '@angular/core';
import { Filme  } from '../model/filme';
import { FilmeService } from '../service/filme.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-filme',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-filme.component.html',
  styleUrl: './form-filme.component.css',
  providers: [FilmeService, Router]
})
export class FormUsuarioComponent {
  filme: Filme = new Filme();

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');

    if (id) {
      this.filmeService.getFilmeById(id).subscribe(filme => {
        this.filme = filme;
      });
    }
  }

  salvar() {
    this.filmeService.saveFilme(this.filme).subscribe(res => {
      this.router.navigate(['filmes']);
    });
  }
}

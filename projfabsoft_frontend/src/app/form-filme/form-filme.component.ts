import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Filme } from '../model/filme';
import { FilmeService } from '../service/filme.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-filme',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-filme.component.html',
  styleUrls: ['./form-filme.component.css'],
  providers: [FilmeService]
})
export class FormFilmeComponent {
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
    this.filmeService.saveFilme(this.filme).subscribe(() => {
      this.router.navigate(['filmes']);
    });
  }

  voltar() {
    this.router.navigate(['filmes']);
  }
}

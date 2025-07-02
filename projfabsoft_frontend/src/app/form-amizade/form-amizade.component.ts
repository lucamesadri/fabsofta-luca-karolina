import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Amizade } from '../model/amizade';
import { AmizadeService } from '../service/amizade.service';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-amizade',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-amizade.component.html',
  styleUrls: ['./form-amizade.component.css'],
  providers: [AmizadeService, UsuarioService]
})
export class FormAmizadeComponent {
  amizade: Amizade = new Amizade();
  usuarios: Usuario[] = [];

  constructor(
    private amizadeService: AmizadeService,
    private usuarioService: UsuarioService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });

    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.amizadeService.getAmizadeById(id).subscribe(amizade => {
        this.amizade = amizade;
      });
    }
  }

  salvar() {
    if (this.amizade.solicitante && this.amizade.solicitante.id &&
        this.amizade.solicitado && this.amizade.solicitado.id) {
      this.amizade.solicitante = { id: this.amizade.solicitante.id };
      this.amizade.solicitado = { id: this.amizade.solicitado.id };
      this.amizadeService.saveAmizade(this.amizade).subscribe(() => {
        this.router.navigate(['amizades']);
      });
    } else {
      alert('Selecione um solicitante e um solicitado.');
    }
  }

  voltar() {
    this.router.navigate(['amizades']);
  }
}

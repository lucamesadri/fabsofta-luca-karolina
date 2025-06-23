import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FilmeComponent } from './filme/filme.component';
import { FormFilmeComponent } from './form-filme/form-filme.component'; // se existir

export const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'usuarios/novo', component: FormUsuarioComponent },
  { path: 'usuarios/alterar/:id', component: FormUsuarioComponent },

  { path: 'filmes', component: FilmeComponent },
  { path: 'filmes/novo', component: FormFilmeComponent },        // ajustar conforme seus componentes
  { path: 'filmes/alterar/:id', component: FormFilmeComponent }  // ajustar conforme seus componentes
];

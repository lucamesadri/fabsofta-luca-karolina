import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { FilmeComponent } from './filme/filme.component';
import { FormFilmeComponent } from './form-filme/form-filme.component'; // se existir
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FormAvaliacaoComponent } from './form-avaliacao/form-avaliacao.component';

export const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'usuarios/novo', component: FormUsuarioComponent },
  { path: 'usuarios/alterar/:id', component: FormUsuarioComponent },

  { path: 'filmes', component: FilmeComponent },
  { path: 'filmes/novo', component: FormFilmeComponent },        
  { path: 'filmes/alterar/:id', component: FormFilmeComponent } ,
  
  { path: 'avaliacoes', component: AvaliacaoComponent },
  { path: 'avaliacoes/novo', component: FormAvaliacaoComponent },        
  { path: 'avaliacoes/alterar/:id', component: FormAvaliacaoComponent } 
];

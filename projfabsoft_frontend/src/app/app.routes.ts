import { Routes } from '@angular/router';
import {UsuarioComponent} from './usuario/usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { AmizadeComponent } from './amizade/amizade.component';
import { FormAmizadeComponent } from './form-amizade/form-amizade.component';
import { FilmeComponent } from './filme/filme.component';
import { FormFilmeComponent } from './form-filme/form-filme.component';
import { ResenhaComponent } from './resenha/resenha.component';
import { FormResenhaComponent } from './form-resenha/form-resenha.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FormAvaliacaoComponent } from './form-avaliacao/form-avaliacao.component';

export const routes: Routes = [
    {path: 'usuarios', component: UsuarioComponent},
    {path: 'usuarios/novo', component: FormUsuarioComponent},
    {path: 'usuarios/alterar/:id', component: FormUsuarioComponent},
    {path: 'amizades', component: AmizadeComponent},
    {path: 'amizades/novo', component: FormAmizadeComponent},
    {path: 'amizades/alterar/:id', component: FormAmizadeComponent},
    { path: 'filmes', component: FilmeComponent },
    { path: 'filmes/novo', component: FormFilmeComponent },
    { path: 'filmes/alterar/:id', component: FormFilmeComponent },
    { path: 'resenhas', component: ResenhaComponent },
    { path: 'resenhas/novo', component: FormResenhaComponent },
    { path: 'resenhas/alterar/:id', component: FormResenhaComponent },
    { path: 'avaliacoes', component: AvaliacaoComponent },
    { path: 'avaliacoes/novo', component: FormAvaliacaoComponent },
    { path: 'avaliacoes/alterar/:id', component: FormAvaliacaoComponent }
];

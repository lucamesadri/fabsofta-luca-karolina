import { Routes } from '@angular/router';
import {UsuarioComponent} from './usuario/usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';


export const routes: Routes = [
    {path: 'usuarios', component: UsuarioComponent},
    {path: 'usuarios/novo', component: FormUsuarioComponent},
    {path: 'usuarios/alterar/:id', component: FormUsuarioComponent}
];

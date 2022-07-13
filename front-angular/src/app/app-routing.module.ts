import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUsersComponent } from './form-users/form-users.component';
import { UsersComponent } from './users/users.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: 'form', component: FormUsersComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'user/:id', component: UsuarioComponent
  },
  {
    path: 'form/:id', component: FormUsersComponent
  },
  {
    path: '**', redirectTo: 'users'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

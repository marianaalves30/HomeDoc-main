import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentosComponent } from './modules/agendamentos/agendamentos.component';
import { LoginComponent } from './core/login/login.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agendamentos', component: AgendamentosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

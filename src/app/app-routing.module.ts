import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefinirPerfilComponent } from './definir-perfil/definir-perfil.component';

const routes: Routes = [
  { path: 'definir-perfil', component: DefinirPerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
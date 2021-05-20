import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { DefinirPerfilComponent } from './definir-perfil/definir-perfil.component';
import { GerenteDashboardComponent } from './gerente-dashboard/gerente-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'definir-perfil', pathMatch: 'full' },
  { path: 'definir-perfil', component: DefinirPerfilComponent },
  { path: 'app/gerente', component: GerenteDashboardComponent },
  { path: 'app/cliente', component: ClientDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { ListPedidosComponent } from './pages/list-pedidos/list-pedidos.component';
import { AgregarpedidoComponent } from './pages/agregarpedido/agregarpedido.component';


const routes: Routes = [
  { path: 'home', component: EstadisticasComponent },
  { path: 'list', component: ListPedidosComponent },
  { path: 'agregar', component: AgregarpedidoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

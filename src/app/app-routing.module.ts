import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { AuthGuard } from './auth.guard';
import { ListadoComponent } from './compra/listado/listado.component';
import { NuevaCompraComponent } from './compra/nueva-compra/nueva-compra.component';
import { HistorialCompraComponent } from './compra/historial-compra/historial-compra.component';
import { FormulariosComponent } from './formularios/formularios.component';

const routes: Routes = [
  {path: 'pipes', component: PipesComponent, canActivate:[AuthGuard] },
  {path: 'listado-compra', component: ListadoComponent, children: [
    {path: 'nueva-compra', component: NuevaCompraComponent},
    {path: 'historial', component: HistorialCompraComponent}
  ]},
  {path: 'formularios', component: FormulariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

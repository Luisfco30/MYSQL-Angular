import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponenteComponent } from './components/detalle-componente/detalle-componente.component';
import { ListaComponenteComponent } from './components/lista-componente/lista-componente.component';
const routes: Routes = [
  {path:"",component:ListaComponenteComponent},
  {path:'detalle',component:DetalleComponenteComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

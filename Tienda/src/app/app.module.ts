import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleComponenteComponent } from './components/detalle-componente/detalle-componente.component';
import { ListaComponenteComponent } from './components/lista-componente/lista-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalleComponenteComponent,
    ListaComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

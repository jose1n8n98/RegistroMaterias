import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaHorarioComponent } from './lista-horario/lista-horario.component';
import { IngresarHorariosComponent } from './ingresar-horarios/ingresar-horarios.component';
import { IngresarAsignaturaComponent } from './ingresar-asignatura/ingresar-asignatura.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaHorarioComponent,
    IngresarHorariosComponent,
    IngresarAsignaturaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

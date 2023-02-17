
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarAsignaturaComponent } from './ingresar-asignatura/ingresar-asignatura.component';
import { IngresarHorariosComponent } from './ingresar-horarios/ingresar-horarios.component';
import { ListaHorarioComponent } from './lista-horario/lista-horario.component';


const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch:'full'},
  {path: 'lista', component: ListaHorarioComponent},
  {path: 'registrar-asignatura', component: IngresarAsignaturaComponent},
  {path: 'registrar-horario', component: IngresarHorariosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

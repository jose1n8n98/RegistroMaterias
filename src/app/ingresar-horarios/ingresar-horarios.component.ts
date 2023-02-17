import { IngresarHorarioService } from './../ingresar-horario.service';
import { IngresarAsignaturaService } from './../ingresar-asignatura.service';
import { RouterModule } from '@angular/router';
import { HorariosService } from './../horarios.service';
import { Horario } from './../horario';
import { Component } from '@angular/core';
import { identity } from 'rxjs';

@Component({
  selector: 'app-ingresar-horarios',
  templateUrl: './ingresar-horarios.component.html',
  styleUrls: ['./ingresar-horarios.component.css']
})
export class IngresarHorariosComponent {
  ingresarHorario: IngresarHorarioService;
  horario: Horario = new Horario();
  id:number
  constructor(private horarioService:IngresarHorarioService, private router:RouterModule) { }
  ngOnInit(): void {
    console.log(this.horario)
  }
  guardarHorario(){
    this.horarioService.ingresarHorario(this.horario, this.id).subscribe();
  }

  onSubmit(){
    console.log(this.horario)
    this.guardarHorario();
  }
}

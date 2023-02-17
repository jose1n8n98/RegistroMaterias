import { HorariosService } from './../horarios.service';
import { Asignatura } from './../asignatura';
import { Horario } from './../horario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-horario',
  templateUrl: './lista-horario.component.html',
  styleUrls: ['./lista-horario.component.css']
})
export class ListaHorarioComponent {
  horarios: Horario[];
  asignaturas: Asignatura[];
  constructor(private horariosService:HorariosService) {
  }
  ngOnInit(): void {

    this.obtenerHorarios();


  }

  private obtenerHorarios(){
    this.horariosService.obtenerListaHorarios().subscribe(dato => {
      this.horarios = dato;
    })
  }
}

import { IngresarAsignaturaService } from './../ingresar-asignatura.service';
import { Asignatura } from './../asignatura';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-asignatura',
  templateUrl: './ingresar-asignatura.component.html',
  styleUrls: ['./ingresar-asignatura.component.css']
})
export class IngresarAsignaturaComponent {


  asignatura: Asignatura = new Asignatura();
  constructor(private asignaturaservice:IngresarAsignaturaService) { }
  ngOnInit(): void {
    console.log(this.asignatura)
  }
  guardarAsignatura(){
    this.asignaturaservice.ingresarAsignatura(this.asignatura).subscribe();
  }
  onSubmit(){
    console.log(this.asignatura)
  }
}

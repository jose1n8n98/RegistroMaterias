import { Asignatura } from './asignatura';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class IngresarAsignaturaService {
  private baseURL = "http://localhost:8080/asignatura/save"
  constructor(private httpClient : HttpClient) { }

  //Ingresar Asignatura
  ingresarAsignatura(asignatura:Asignatura): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,asignatura);
  }
}

import { Horario } from './horario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresarHorarioService {
  private baseURL = "http://localhost:8080/horario/save"
  constructor(private httpClient : HttpClient) { }

  //Ingresar Horarios
  ingresarHorario(horario:Horario, id:number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`,horario, );
  }
}

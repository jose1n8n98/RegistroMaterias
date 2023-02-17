import { Horario } from './horario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  //URL servicios Horarios
  private baseURL = "http://localhost:8080/horario/list"
  constructor(private httpClient : HttpClient) {}

    //Obtener Horarios
    obtenerListaHorarios(): Observable<Horario[]>{
      return this.httpClient.get<Horario[]>(`${this.baseURL}`)
    }

}

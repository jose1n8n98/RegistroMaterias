import { Asignatura } from './asignatura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BuscarAsignaturaService {
 private baseURL = "http://localhost:8080/asignatura/list";
  constructor(private httpClient : HttpClient) { }

  obtenerAsignatura(): Observable<Asignatura[]>{
    return this.httpClient.get<Asignatura[]>(`${this.baseURL}`)
  }
}

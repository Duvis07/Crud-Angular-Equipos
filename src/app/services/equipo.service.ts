import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EquipoInterface } from '../interfaces/equipo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  // URL de la API
  URL = '/api';

  constructor(private http: HttpClient) {}

  // Obtiene todos los equipos de la base de datos
  getEquipos() {
    return this.http.get(this.URL);
  }

  // Obtiene un equipo por su id (id)
  getEquipo(id: string):Observable<EquipoInterface[]> {
    return this.http.get<EquipoInterface[]>(this.URL + '/' + id);
  }

  // Crea un equipo nuevo en la base de datos
  addEquipo(equipo: EquipoInterface) {
    return this.http.post(this.URL, equipo);
  }

  // Modifica un equipo existente
  updateEquipo(id: string, equipo: EquipoInterface) {
    return this.http.put(this.URL + '/' + id, equipo);
  }

  // Elimina un equipo por su id
  deleteEquipo(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}

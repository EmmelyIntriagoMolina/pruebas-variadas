import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiURL=`https://practicas-10042.firebaseio.com/cursos`

  constructor(private clienteServicio: HttpClient) { }

  public getCursos()
  {
    return this.clienteServicio.get(`${this.apiURL}.json`).toPromise()
  }

  public postCurso()
  {

  }

  public deleteCurso()
  {

  }
}

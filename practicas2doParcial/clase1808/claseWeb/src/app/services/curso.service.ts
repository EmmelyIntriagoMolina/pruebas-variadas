import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Curso } from '../interfaces/curso';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  

  apiURL=`https://practicas-10042.firebaseio.com/cursos`

  constructor(private clienteServicio: HttpClient) { }

  //Si le pasamos parametro consulta por un código, sino le pasamos parámetro
  //CONSULTA TODOS LOS CURSOS
  public getCursos(codigo='')
  {
    if(codigo=='')
    return this.clienteServicio.get(`${this.apiURL}.json`).toPromise()
    return this.clienteServicio.get(`${this.apiURL}/${codigo}.json`).toPromise()
  
  }
  //{codigo:'003',descripcion:'Sexto A',cupo:60}
  //CREAR O MODIFICAR UN CURSO
  public postCurso(cursox:Curso)
  {
  //https://practicas-10042.firebaseio.com/cursos/003.json
    return this.clienteServicio.put(`${this.apiURL}/${cursox.codigo}.json`
    ,cursox,{headers:{'Content-Type':'application/json'}}).toPromise();

  }
  
  //ELIMINAR EL CURSO SEGÚN SU CÓDIGO
  public deleteCurso(codigox:string)
  {
    return this.clienteServicio.delete(`${this.apiURL}/${codigox}.json`).toPromise();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiURL=`https://hola-bf4a2.firebaseio.com/productos`

  constructor(private http: HttpClient) { }

  public getProducto(codigo='')
  {
    if(codigo=='')
    return this.http.get(`${this.apiURL}.json`).toPromise()
    return this.http.get(`${this.apiURL}/${codigo}.json`).toPromise()
  }

  public postProducto(productox:producto)
  {
    return this.http.put(`${this.apiURL}/${productox.codigo}.json`
    ,productox,{headers:{'Content-Type':'application/json'}}).toPromise();

  }

  public deleteCurso(productox:string)
  {
    return this.http.delete(`${this.apiURL}/${productox}.json`).toPromise();
  }
}

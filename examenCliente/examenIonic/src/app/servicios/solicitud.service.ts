import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Solicitud } from '../interfaces/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  apiURL=`https://secretariacliente.firebaseio.com/solicitudes`

  constructor(private clienteServicio:HttpClient) { }


  //CONSULTAR
  public getSolicitudes()
  {
    return this.clienteServicio.get(`${this.apiURL}.json`).toPromise();
  }

  //CREAR O MODIFICAR
  public postSolicitudes(solicitudx: Solicitud)
  {
    return this.clienteServicio.put(`${this.apiURL}/${solicitudx.codigo}.json`
    ,solicitudx,{headers:{'Content-Type':'application/json'}}).toPromise();
  }

  //ELIMINAR
  public deletePedido(solicitudx:string)
  {
    return this.clienteServicio.delete(`${this.apiURL}/${solicitudx}.json`).toPromise();
  }
}

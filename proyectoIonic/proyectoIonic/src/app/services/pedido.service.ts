import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  apiURL=`https://insumedventas-f8340.firebaseio.com/pedidos`

  constructor(private clienteServicio:HttpClient) { }


  //Consultar los pedidos
  public getPedidos(idPedido='')
  {
    if(idPedido=='')
      return this.clienteServicio.get(`${this.apiURL}.json`).toPromise()
    return this.clienteServicio.get(`${this.apiURL}/${idPedido}.json`).toPromise()
  }

  //Crear o modificar un pedido
  public postPedido(pedidox: Pedido)
  {
    return this.clienteServicio.put(`${this.apiURL}/${pedidox.idPedido}.json`
    ,pedidox,{headers:{'Content-Type':'application/json'}}).toPromise();
  }

  //Eliminar un pedido
  public deletePedido(pedidox:string)
  {
    return this.clienteServicio.delete(`${this.apiURL}/${pedidox}.json`).toPromise();
  }
}

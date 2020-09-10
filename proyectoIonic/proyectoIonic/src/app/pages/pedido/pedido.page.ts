import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';
import { iCrud } from 'src/app/interfaces/iCrud';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit, iCrud {

  public pedidoAuxiliar: Pedido={idPedido:'000', descripcion:'Pedido 0', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia'}
  
  public pedidosAuxiliar: Pedido[]=[];
  /*{idPedido:'000', descripcion:'Pedido 0', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia'},
  {idPedido:'001', descripcion:'Pedido 1', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia'},
  {idPedido:'002', descripcion:'Pedido 2', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia'},
  {idPedido:'003', descripcion:'Pedido 3', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia'},
  {idPedido:'004', descripcion:'Pedido 4', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia'}
 */


  constructor(private clientehttp: PedidoService) { }
  

  //Guardar un Pedido
  grabar(): void {
    this.clientehttp.postPedido(this.pedidoAuxiliar).then(respuesta=>{
      console.log('grabó correctamente')
    }).catch(err=>{
      console.log('no se pudo almacenar el curso')
    })
  }

  //Consultar un Pedido
  consultar(): void {
    this.clientehttp.getPedidos().then(respuesta=>{
      this.pedidosAuxiliar=[];
      for(let elemento in respuesta)
      {
        this.pedidosAuxiliar.push(respuesta[elemento]);
      }
      console.log(respuesta)
    }).catch(error=>{
      console.log(error)
    })
  }

  eliminar(): void {
    this.clientehttp.deletePedido(this.pedidoAuxiliar.idPedido).then(respuesta=>{
      console.log('Eliminó correctamente')
    }).catch(error=>{
      console.log('No se pudo eliminar el pedido')
    })
  }
  
  ngOnInit() {
  }

  nuevo(){
    this.pedidoAuxiliar.idPedido='';
    this.pedidoAuxiliar.descripcion='';
    this.pedidoAuxiliar.fecha='';
    this.pedidoAuxiliar.cliente='';
    this.pedidoAuxiliar.direccion='';
  }

}

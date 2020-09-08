import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  public pedidoAuxiliar: Pedido={idPedido:'000', descripcion:'Pedido 0', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia'}
 // :{idPedido: string, descripcion: string, fecha:string, cliente:string, direccion:string}
 // ={idPedido:'000', descripcion:'Pedido 0', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia'}
 public pedidosAuxiliar: Pedido[]=[];

  constructor() { }


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

import { Component, OnInit } from '@angular/core';
import { Pedido, agProducto } from 'src/app/interfaces/pedido';
import { iCrud } from 'src/app/interfaces/iCrud';
import { PedidoService } from 'src/app/services/pedido.service';
import { ToastController } from '@ionic/angular';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit, iCrud {

  //Pedido
  public pedidoAuxiliar: Pedido={idPedido:'000', descripcion:'Pedido 0', fecha:'08/09/2020', cliente:'Emmely', direccion:'Altagracia', productos:[]}
  public pedidosAuxiliar: Pedido[]=[];

  //Producto
  public productoAuxiliar: Producto={idProducto:'0', descripcion:'', existencia:'', precio:'', proveedor:''}
  public productosAuxiliar: Producto[]=[];
  //Agregar Producto
  public productoAuxiliar2: agProducto={idProducto:'', descripcion:'', cantidad:''}
  
 
  constructor(private clientehttp: PedidoService, private toast:ToastController) { }
  

  async mostrarMensaje(mensaje:string, duracion:number){
    const mensajex=await this.toast.create({message:mensaje, duration:duracion});
    mensajex.present();
  }

  //Guardar un Pedido
  grabar(): void {
    this.clientehttp.postPedido(this.pedidoAuxiliar).then(respuesta=>{
      console.log('El pedido se envió correctamente',2000)
    }).catch(err=>{
      console.log('No se pudo enviar el pedido')
    })
  }

  //Consultar un productos para el pedido
  consultar(): void {
    this.clientehttp.getPedidos().then(respuesta=>{
      this.productosAuxiliar=[];
        for(let elemento in respuesta)
        {
          this.productosAuxiliar.push(respuesta[elemento]);
        }
        console.log(respuesta)
      }).catch(err=>{
        console.log(err)
      })
  }
  

  //Eliminar un Pedido
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
    this.pedidoAuxiliar.productos=[];
    
  }

  agregarProducto(){
    this.pedidoAuxiliar.productos.push(this.productoAuxiliar2);
  }

}

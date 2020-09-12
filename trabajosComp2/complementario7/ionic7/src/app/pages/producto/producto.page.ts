import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastController } from '@ionic/angular';
import { ICrud } from 'src/app/interfaces/ICrud';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit, ICrud {

  public productoAuxiliar:producto ={codigo:'000',descripcion:'Vacio',};

  public productosAuxiliar: producto[]=[];

  constructor(private cliente: ProductoService, private toast: ToastController) { }


  async mostrarMensaje(mensaje:string, duracion:number){
    //convertimos en síncrono o esperamos que la funcion cree el toast
    const mensajex=await this.toast.create({message:mensaje, duration:duracion});
    //ya estamos seguros que el toast está creado y podemos invocar el método present
    mensajex.present();
  }

  nuevo(): void {
    this.productoAuxiliar.codigo="";
    this.productoAuxiliar={descripcion:'', /*precio:"",*/codigo:''};
  }
  grabar(): void {
    this.cliente.postProducto(this.productoAuxiliar).then(respuesta=>{
      console.log('grabó correctamente',2000)
    }).catch(err=>{
      console.log('no se pudo almacenar el curso')
    })
  }
  consultar(): void {
    this.cliente.getProducto().then(respuesta=>{
      this.productosAuxiliar=[];
        for(let elemento in respuesta)
        {
          this.productosAuxiliar.push(respuesta[elemento]);
        }
        console.log(respuesta)
      })
      
      .catch(err=>{
        console.log(err)
      })
  }
  eliminar(): void {
    this.cliente.deleteCurso(this.productoAuxiliar.codigo).then(respuesta=>{
      console.log('eliminó correctamente')
    }).catch(err=>{
      console.log('no se pudo eliminar el curso')
    })
  }

  consultaIndividual(codigox:string)
  {
    this.cliente.getProducto(codigox).then(respuesta=>{
      this.productoAuxiliar=<producto>respuesta;
    }).catch(err=>{
      console.log(err)
    })
  }

  ngOnInit() {
  }

}

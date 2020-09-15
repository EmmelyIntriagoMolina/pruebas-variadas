import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ICrud } from 'src/app/interfaces/ICrud';
import { agRequisito, Solicitud } from 'src/app/interfaces/Solicitud';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit, ICrud {

  public solicitudAuxiliar: Solicitud={codigo:'000', identificacion:'Cédula', requisito:[]}
  public solicitudesAuxiliar: Solicitud[]=[];

  //Agregar Requisito
  public requisitosAuxiliar: agRequisito[]=[];
  public requisitoAuxiliar: agRequisito={idR:0, tipo:'', fecha:'',personaInv:'',estado:''}
  constructor(private clientehttp: SolicitudService, private toast:ToastController) { }
  
  async mostrarMensaje(mensaje:string, duracion:number){ 
    const mensajex= await this.toast.create({message:mensaje, duration:duracion });
    mensajex.present();
  }

  //NUEVO
  nuevo(): void {
    this.solicitudAuxiliar.codigo='';
    this.solicitudAuxiliar.identificacion='';
    this.solicitudAuxiliar.requisito=[];    
  }

  //GUARDAR
  grabar(): void {
    this.clientehttp.postSolicitudes(this.solicitudAuxiliar).then(respuesta=>{
      this.mostrarMensaje('La solicitud se envió correctamente',2000)
    }).catch(err=>{
      this.mostrarMensaje('La solicitud no se pudo enviar',2000)
    })
  }

  //CONSULTAR
  consultar(): void {
    this.clientehttp.getSolicitudes().then(respuesta=>{
      this.solicitudesAuxiliar=[];
        for(let elemento in respuesta)
        {
          this.solicitudesAuxiliar.push(respuesta[elemento]);
        }
        console.log(respuesta)
      }).catch(err=>{
        console.log(err)
      })
  }
  //Cantidad requisitos
  
  cantidadR():void {
    let contador1=0;
    let contador2=0;
    let contador3=0;
    let contador4=0;
    if(this.requisitoAuxiliar.tipo=='Oficio'){
      contador1++;
    }else if(this.requisitoAuxiliar.tipo=='Trámite'){
      contador2++
    }else if(this.requisitoAuxiliar.tipo=='Documento Legal'){
      contador3++
    }else if(this.requisitoAuxiliar.tipo=='Proceso'){
      contador4++
    }
    alert("El total de oficios es: "+contador1+" . El total de Trámistes es: "
    +contador2+" . El total de Documentos Legales es: "+contador3+
    " . El total de Procesos es: "+contador4);
  }
  //ELIMINAR
  eliminar(): void {
    this.clientehttp.deletePedido(this.solicitudAuxiliar.codigo).then(respuesta=>{
      this.mostrarMensaje('Eliminó correctamente',2000)
    }).catch(error=>{
      this.mostrarMensaje('No se pudo eliminar el pedido',2000)
    })
  }

  agregarRequisito(){
    this.solicitudAuxiliar.requisito.push(this.requisitoAuxiliar);
  }

  ngOnInit() {
  }

}

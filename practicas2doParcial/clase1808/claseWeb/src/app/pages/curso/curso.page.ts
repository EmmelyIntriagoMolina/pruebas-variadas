import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { iCrud } from 'src/app/interfaces/iCrud';
import { CursoService } from 'src/app/services/curso.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit, iCrud {
  
  public cursoAuxiliar:Curso={codigo:'000',descripcion:'Vacio',cupo:0};

  public cursosAuxiliar: Curso[]=[];
    //{codigo:'001',descripcion:'PrimeroA',cupo:25},
    //{codigo:'002',descripcion:'SegundoA',cupo:20},
   // {codigo:'003',descripcion:'TerceroA',cupo:30},
    //{codigo:'004',descripcion:'CuartoA',cupo:30},
    
  
  //:{codigo:string, descripcion:string, cupo:number}
  //={codigo:'000', descripcion:'vacio', cupo:0};

  
  //codigo 001
  //descripcion primeroA
  //cupo 25


  constructor(private cliente: CursoService, private toast: ToastController) { 

  }
  
  async mostrarMensaje(mensaje:string, duracion:number){
    //convertimos en síncrono o esperamos que la funcion cree el toast
    const mensajex=await this.toast.create({message:mensaje, duration:duracion});
    //ya estamos seguros que el toast está creado y podemos invocar el método present
    mensajex.present();
  }
  grabar(): void {
    this.cliente.postCurso(this.cursoAuxiliar).then(respuesta=>{
      console.log('grabó correctamente',2000)
    }).catch(err=>{
      console.log('no se pudo almacenar el curso')
    })
  }
  consultar(): void {
    
    this.cliente.getCursos().then(respuesta=>{
  this.cursosAuxiliar=[];
      for(let elemento in respuesta)
      {
        this.cursosAuxiliar.push(respuesta[elemento]);
      }
      console.log(respuesta)
    })
    
    .catch(err=>{
      console.log(err)
    })
  }

  consultaIndividual(codigox:string)
  {
    this.cliente.getCursos(codigox).then(respuesta=>{
      this.cursoAuxiliar=<Curso>respuesta;
    }).catch(err=>{
      console.log(err)
    })
  }
  eliminar(): void {
    this.cliente.deleteCurso(this.cursoAuxiliar.codigo).then(respuesta=>{
      console.log('eliminó correctamente')
    }).catch(err=>{
      console.log('no se pudo eliminar el curso')
    })
  }

  ngOnInit() {
  }

  nuevo(){
    this.cursoAuxiliar.codigo="";
    this.cursoAuxiliar={descripcion:'', cupo:0,codigo:''};
  }
}

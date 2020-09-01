import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { iCrud } from 'src/app/interfaces/iCrud';
import { CursoService } from 'src/app/services/curso.service';

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


  constructor(private cliente: CursoService) { }
  grabar(): void {
    throw new Error("Method not implemented.");
  }
  consultar(): void {
    
    this.cliente.getCursos().then(respuesta=>{
      console.log(respuesta)
    }).catch(err=>{
      console.log(err)
    })
  }
  eliminar(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
  }

  nuevo(){
    this.cursoAuxiliar.codigo="";
    this.cursoAuxiliar={descripcion:'', cupo:0,codigo:''};
  }
}

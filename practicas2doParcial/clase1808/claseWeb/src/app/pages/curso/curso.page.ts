import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  public mensaje:string="Hola IONIC";
  //Variables para calcular suma de dos numeros
  public valor1:number=0;
  public valor2:number=0;
  public total:number=0;

  constructor() { }

  ngOnInit() {
  }

  sumar()
  {
    this.total= this.valor1+this.valor2;
  }

}

window.addEventListener('load', function()
{
      btnbuscar.addEventListener('click', function(){

           
            arr=
            [
                ["Código", "Descripción", "Tamaño", "Precio","Existencia","Comprar"],
                [1, "Alcohol Weir", "500 ml", "$3,00 c/u","200","<button class=btncompra id=compra1>Comprar</button>"],
                [2, "Alcohol en Gel Dr Farma", "300 ml", "$3,50 c/u","320","<button class=btncompra id=compra1>Comprar</button>"],
                [3, "Alcohol en Gel Elite", "300 ml", "$3,50 c/u","150","<button class=btncompra id=compra1>Comprar</button>"],
                [4, "Alcohol en Gel Algabo", "500 ml", "$4,50 c/u","98","<button class=btncompra id=compra1>Comprar</button>"],
                [5, "Alcohol en Gel Weir", "560 ml", "$4,50 c/u","100","<button class=btncompra id=compra1>Comprar</button>"]
            
            ]
            
            convertirArregloEnTabla(arr);
            
        
      });

     
      function convertirArregloEnTabla(parreglo)
      {
            
            let html="<table border=1>"

    
            parreglo.forEach(elemento=>{
                  html+="<tr>"
                  elemento.forEach(col=>{
                  html+=`<td> ${col} </td>`
            })
        html+="</tr>"
    })
    html+="</table>"
    divtabla.innerHTML=html
    
}
});
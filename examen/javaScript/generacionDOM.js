window.addEventListener('load',function(){


    //VALIDAR FILAS
    txtFilas.addEventListener('blur',function()
    {
        mensajeTabla.innerHTML=""
        if(txtFilas.value<=0 || txtFilas.value>5)
        {
            mensajeTabla.innerHTML+="Ingrese un valor entre 1 y 5"
        }
    })


    //VALIDAR COLUMNAS
    txtColumnas.addEventListener('blur',function()
    {
        mensajeTabla.innerHTML=""
        if(txtColumnas.value<=0 || txtColumnas.value>5){
            mensajeTabla.innerHTML+="Ingrese un valor entre 1 y 5"
        }
    })
    
    //GENERAR TABLA1
    btnGenerar1.addEventListener('click',function(){
       
        numeroF=txtFilas.value
        numeroC=txtColumnas.value
        contador=0
        let contenidoHTML='<table border=1 id="llenarTabla">'
        for(let i=0;i<numeroF;i++)
        {
            contenidoHTML+="<tr>"
            for(let j=0;j<numeroC;j++)
            {
                contenidoHTML+="<td>"
                contenidoHTML+=`<input placeholder="Ingrese un número" id="id${++contador}"></input>`
                contenidoHTML+="</td>"
            }
            contenidoHTML+="</tr>"
        }
        contenidoHTML+="</table>"

        mostrarTabla1.innerHTML=contenidoHTML;
    })


    //GENERAR TABLA 2
    btnGenerar2.addEventListener('click',function(){
        
        numeroF=txtFilas.value
        numeroC=txtColumnas.value

        let contenidoHTML="<table border=1>"
        for(let i=1;i<=numeroC;i++)
        {
            contenidoHTML+="<tr>"
            for(let j=1;j<=numeroF;j++)
            {
                
                contenidoHTML+="<td>"
                celda=document.getElementById('llenarTabla').rows[j-1].cells[i-1].innerHTML;
                celda=document.getElementById('llenarTabla').rows[j-1].cells[i-1].childNodes[0].value;
                //console.log('celda: ' + celda);
                contenidoHTML+=`<button class=botonTabla2 value="${i}">${celda}</button>`
                //contenidoHTML+=celda;
                contenidoHTML+="</td>"
            }
            contenidoHTML+="</tr>"
        }
        contenidoHTML+="</table>"

        mostrarTabla2.innerHTML=contenidoHTML;
    })


})


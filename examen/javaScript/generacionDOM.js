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

     //VALIDAR LONGITUD
     txtLongRegistro.addEventListener('blur',function()
     {
         mensajeLongitud2.innerHTML=""
         if(validarNumerosSi(txtLongRegistro.value))
         {
             mensajeLongitud2.innerHTML+="Ingrese números y decimales separados con .";
         }
         if(txtLongRegistro.value<-180 || txtLongRegistro.value >180){
             mensajeLongitud2.innerHTML+="La Longitud ingresada no es correcta";
         }
     })
 
     //VALIDAR LATITUD
     txtLatRegistro.addEventListener('blur',function()
     {
         mensajeLatitud2.innerHTML=""
         if(validarNumerosSi(txtLatRegistro.value))
         {
             mensajeLatitud2.innerHTML+="Ingrese números y decimales separados con punto";
         }
         if(txtLatRegistro.value<-90 || txtLatRegistro.value>90){
             mensajeLatitud2.innerHTML+="La Latitud ingresada no es correcta";
         }
     })

    //GENERAR DISTANCIA EN KILOMETRO
    btnMostrarDistancia.addEventListener('click', function(){

        mostarDistancia.innerHTML=""
        navigator.geolocation.getCurrentPosition(function(posicion){
            var Lat1=posicion.coords.latitude; //Obtenemos la latitud actual
            var Lon1=posicion.coords.longitude;//Obtenemos la longitud actual
            var Lon2=document.getElementById('txtLongRegistro').value //Ingreso de Longitud de lugar de registro
            var Lat2=document.getElementById('txtLatRegistro').value //Ingreso de Latitud de lugar de registro

            rad = function(x) {return x*Math.PI/180;}
            // Fórmula del Haversine

            var Radio = 6378.137; //Radio de la Tierra en KM
            var distanciaLat = rad( Lat2 - Lat1 );
            var distanciaLong = rad( Lon2 - Lon1 );
            var a = Math.sin(distanciaLat/2) * Math.sin(distanciaLat/2) + Math.cos(rad(Lat1)) * Math.cos(rad(Lat2)) * Math.sin(distanciaLong/2) * Math.sin(distanciaLong/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var distancia = Radio * c;
            mostarDistancia.innerHTML+=distancia
            mostarDistancia.innerHTML+=" KM"
            
            /*mostarDistancia.innerHTML=(calcularDistancia(Lon1.value,Lat1.value,Lon2.value,Lat2.value))
            console.log(calcularDistancia.)*/
        })
    })
})

function validarNumerosSi(parametro){

    let letras="abcdefghyjklmnñopqrstuvwxyzAABCDFEFGHJIKLÑOPQRSTUVWXYZ,";

    parametro = parametro.toLowerCase();
    for(i=0; i<parametro.length; i++){
        if (letras.indexOf(parametro.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
}
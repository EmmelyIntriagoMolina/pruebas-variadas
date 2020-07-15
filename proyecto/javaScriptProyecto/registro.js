window.addEventListener('load', function(){

    
    txtcedula.addEventListener('blur', function()
    {
        mensajeCedula.innerHTML=""
        if(txtcedula.value.length!=10)
        {
            mensajeCedula.innerHTML+="El número de carcteres debe ser de 10 <br>"
        }
        if (!validarCedula(txtcedula.value))
        {
            mensajeCedula.innerHTML+="No cumple los criterios de validacion del Registro Civil <br>"
            
        }
    
    })

     /* Validar Contraseña*/
    
    contraseña2.addEventListener('blur', function()
     {
        

        mensajeContraseña2.innerHTML=""

        /*Tamaño mínimo */
        if(contraseña.value.length && contraseña2.value.length<8)
        {
            mensajeContraseña2.innerHTML+="La contraseña debe tener al menos 8 caracteres <br>"
        }else{
            if (contraseña.value==contraseña2.value) 
            {
                mensajeContraseña2.innerHTML+="Las contraseñas coinciden <br>"
                
            } else 
            {
                mensajeContraseña2.innerHTML+="Las contraseñas no coinciden"
                
            }
        }
   
        
        
    })

   
    
})

    
/* VALIDAR CEDULA*/

function validarCedula(parametro)
{   
    if(parametro.length!=10) return false;
    let semaforo=false;
    calculo=0;
    parametro.substr(0,9).split('').forEach(element => { //dividir los numeros, ponerlos como un arreglo y recorrerlos
        let numeroActual =semaforo ? parseInt(element): parseInt(element)*2;
        calculo+=numeroActual>9 ? numeroActual-9: numeroActual;
        semaforo=!semaforo;
    })

    while(calculo>0) calculo-=10;
    return parseInt(parametro.substr(9)) + calculo==0;

}



    


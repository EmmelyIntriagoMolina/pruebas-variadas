window.addEventListener('load', function(){

    //VALIDAR CÉDULA
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

    //VALIDAR NOMBRE
    txtnombre.addEventListener('blur',function(){
        mensajeNombre.innerHTML=""
        if(!validarNumeros(txtnombre.value)){
            mensajeNombre.innerHTML+="El campo no puede contener números <br>"
        }

    })


    /* VALIDAR CONTRASEÑA*/
    contraseña.addEventListener('blur',function()
    {
        mensajeContraseña.innerHTML=""

        /*Tamaño mínimo */
        if(contraseña.value.length<8){
            mensajeContraseña.innerHTML+="La contraseña debe tener al menos 8 dígitos<br>"
        }
        //Validar que tenga minúsculas y mayúsculas
        
        if(!validarMinusculas(contraseña.value)){
            mensajeContraseña.innerHTML+="La contraseña debe contener minúsculas, mayúsculas y números<br>"
        }
        if (!validarMayusculas(contraseña.value))
        {
            mensajeContraseña.innerHTML+="La contraseña debe contener mayúsculas, minúsculas y números <br>"
        }
        
    })

    contraseña2.addEventListener('blur', function()
    {
        mensajeContraseña2.innerHTML=""
        mensajeCorrecto.innerHTML=""

        //Validar que las contraseñas sean iguales
        if (contraseña.value==contraseña2.value) 
        {
            mensajeCorrecto.innerHTML+="¡Las contraseñas coinciden! <br>"
                
        } else 
        {
            mensajeContraseña2.innerHTML+="Las contraseñas no coinciden <br>"
                
        }
    })
  
    
})

    
//FUNCIÓN VALIDAR CÉDULA
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

//Validar Minúsculas
function validarMinusculas(parametro)
    {
        let letrasMin="abcdefghyjklmnñopqrstuvwxyz";
            
        for(let i=0; i<parametro.length; i++)
        {
            if (letrasMin.indexOf(parametro.charAt(i),0)!=-1)
            {
                return 1
            }
            else {
                return 0
            }
        }
    }

//Validar Mayusculas
function validarMayusculas(parametro)
    {
        let letrasMayus="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
        for(let i=0; i<parametro.length; i++)
        {
            if (letrasMayus.indexOf(parametro.charAt(i),0)!=-1)
            {
                return 1
            }else{
                return 0
            }
        }
    }

//VALIDAR QUE EL NOMBRE NO TENGA NUMEROS
    function validarNumeros(parametro)
    {
        let numeros="0123456789"
        for(let i=0; i<parametro.length; i++)
        {
            if (numeros.indexOf(parametro.charAt(i),0)==-1)
            {
                return 1
            }else{
                return 0
            }
        }
    }

    


window.addEventListener('load', function(){

 
    /*VALIDAR CONTRASEÑA */
    contraseña.addEventListener('blur', function()
    {
        mensajeContraseña.innerHTML=""

        /*Tamaño mínimo */
        if(contraseña.value.length<8)
        {
            mensajeContraseña.innerHTML+="La contraseña debe tener al menos 8 caracteres <br>"
        }
        //Validar que tenga minúsculas y mayúsculas
        
        if(!validarMinusculas(contraseña.value)){
            mensajeContraseña2.innerHTML+="La contraseña debe contener minúsculas, mayúsculas y números<br>"
            
        }
        if (!validarMayusculas(contraseña.value))
        {
            mensajeContraseña.innerHTML+="La contraseña debe contener mayúsculas, minúsculas y números <br>"
        }
        
    })

    //Validar el usuario
    txtnombre.addEventListener('blur',function()
    {
        mensajeNombre.innerHTML=""
        if(!validarNumeros(txtnombre.value)){
            mensajeNombre.innerHTML+="El campo no puede contener números <br>"
        }
    })
    
})


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
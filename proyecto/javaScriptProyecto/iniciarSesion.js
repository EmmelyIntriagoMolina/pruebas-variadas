window.addEventListener('load', function(){

    function Login()
    { 
        
        var usuario=document.login.usuario.value; 
        var password=document.login.password.value; 

        if (usuario=="Emmely" && password=="Rusher14") 
        { 
            window.location="paginPrincipal.html"; 
        } 

        if (usuario=="Gabriela" && password=="Rusher14") 
        { 
            window.location="paginPrincipal.html"; 
        } 
        if (usuario=="Emmely Intriago" && password=="Rusher14") 
        { 
            window.location="paginPrincipal.html"; 
        } 
    } 

    /*VALIDAR CONTRASEÑA */
    contraseña.addEventListener('blur', function()
    {
        

        mensajeContraseña.innerHTML=""

        /*Tamaño mínimo */
        if(contraseña.value.length<8)
        {
            mensajeContraseña.innerHTML+="La contraseña debe tener al menos 8 caracteres <br>"
        }
    })
    
})
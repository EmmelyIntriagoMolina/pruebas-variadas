window.addEventListener('load', function(){

    let body = document.getElementById("body");
    body.addEventListener('blur',function validarRuc(){
 
    })
 })
 
 
function validarRuc()
{
    let number = document.getElementById('ruc').value;
    let dato = number.length;
    let contenedor=0;
    if(number=="")
    {
        mensajeRuc.innerHTML+="No has ingresado ningún dato, porfavor ingresar los datos correspondientes.";
    }
    else
    {
        for (let i=0; i<dato; i++)
        {
            let valor = number.substring(i,i+1);
            if(valor==0||valor==1||valor==2||valor==3||valor==4||valor==5||valor==6||valor==7||valor==8||valor==9)
            {
            contenedor = contenedor+1;
            }
        }
        if(contenedor==dato)
        {
            while(number.substring(10,13)!=001)
            {
                mensajeRuc.innerHTML += ""
                mensajeRuc.innerHTML +="El numero de digitos debe ser 13, \n y Los tres últimos dígitos deben tener el código del RUC 001.";
                return;
            }
            mensajeRuc.innerHTML += "El RUC está escrito correctamente";
            let digito = number.substring(2,3);
            if(digito<6)
            {
                mensajeRuc.innerHTML += ""
                mensajeRuc.innerHTML += " Pertenece a una persona natural";
            }
            if(digito==6)
            {
                mensajeRuc.innerHTML += ""
                mensajeRuc.innerHTML += "El tercer dígito es igual a 6, por lo tanto el usuario es una entidad pública";
            }
            if(digito==9)
            {
                mensajeRuc.innerHTML += ""
            mensajeRuc.innerHTML +="El tercer dígito es igual a 9, por lo tanto el usuario es una sociedad privada";
            }
        }
    }
}
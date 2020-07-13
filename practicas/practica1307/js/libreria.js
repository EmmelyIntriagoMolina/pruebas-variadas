window.addEventListener('load',function(){

    btnmostrar.addEventListener('click', function(){
        navigator.geolocation.getCurrentPosition(traerPosicionamiento)
    })

    function traerPosicionamiento(parametro)
    {
        divubicacion.innerHTML=parametro.coords.latitude;
        divubicacion.innerHTML+="<br>"
        divubicacion.innerHTML+=parametro.coords.longitude;
    }
})
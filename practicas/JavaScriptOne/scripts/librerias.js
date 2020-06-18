//Controla que los elementos estén cargados
window.addEventListener('load', function()
{
    //Añadir el evento para calcular la suma al boton
    btcalcular.addEventListener('click', function()
    {
    txtresultado.value= Number(txtnumero.value)+parseInt(txtnumero2.value)
    });


    //colocar la cadena invertida haciendo clic en el botón
    btinvertir.addEventListener('click', function()
    {
        divresultados.innerHTML= txtcadena.value.split("").reverse().join("")
    });

    
});


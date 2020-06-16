//Controla que los elementos estén cargados
window.addEventListener('load', function()
{
    //Añadir el evento para calcular la suma al boton
    btcalcular.addEvenListener('click', function()
    {
    txtresultado.value= Number(txtnumero.value)+parseIint(txtnumero2.value)
    });


    //colocar la cadena invertida haciendo clic en el botón
    btinvertir.addEvenListener('click', function()
    {
        divresultado.innerHTML= txtcadena.value.split("").reverse().join("")
    });


});


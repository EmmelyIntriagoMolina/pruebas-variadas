window.addEventListener('load', function()
{

    var resultado, operacion="";

    function mostrarEnPantalla(valor){ //Tomamamos el valor de cada botón de acuerdo al id 
        return document.getElementById(valor)
    }

    uno = mostrarEnPantalla('uno');
    dos = mostrarEnPantalla('dos');
    tres = mostrarEnPantalla('tres');
    cuatro = mostrarEnPantalla('cuatro');
    cinco = mostrarEnPantalla('cinco');
    seis = mostrarEnPantalla('seis');
    siete = mostrarEnPantalla('siete');
    ocho = mostrarEnPantalla('ocho');
    nueve = mostrarEnPantalla('nueve');
    cero = mostrarEnPantalla('cero');
    suma = mostrarEnPantalla('suma');
    resta = mostrarEnPantalla('resta');
    multiplicacion = mostrarEnPantalla('multiplicacion');
    division = mostrarEnPantalla('division');
    punto = mostrarEnPantalla('punto');
    igual = mostrarEnPantalla('igual');
    borar = mostrarEnPantalla('borrar');
    
    function resultadoOperacion(){
        resultado=eval(operacion);//alamacenamos en una variale el resultadod de la  operación con eval
        pantalla.value=resultado;//asignamos el resultado para que se muestre en la pantalla 
        operacion="";//vaciamos la función eval
    }

    function mostrarOperacion(op){
        operacion+=op.innerHTML; //concatenamos los valores que se quieren operar 
        pantalla.value=operacion; //inidicamos que la pantalla mostrará la operación concatenada
    }

    function hacerClick(val){
        val.onclick=function(){ mostrarOperacion(val)}//Al hacer click en un botón comienza la función mostrarOperación de acuedo al botón seleccionado
    }

    hacerClick(uno);//A cada botón le ubicamos la función al hacer click
    hacerClick(dos);
    hacerClick(tres);
    hacerClick(cuatro);
    hacerClick(cinco);
    hacerClick(seis);
    hacerClick(siete);
    hacerClick(ocho);
    hacerClick(nueve);
    hacerClick(cero);
    hacerClick(multiplicacion);
    hacerClick(suma);
    hacerClick(resta);
    hacerClick(punto);
    hacerClick(division);
	borrar.onclick = function(){ operacion = resultado = pantalla.value = '' }//Inidcamos que en la pantalla no se mostrará nada
	igual.onclick = resultadoOperacion;
       
})
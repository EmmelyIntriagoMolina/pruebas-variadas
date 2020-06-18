window.addEventListener('load', function()
{

   var doc = document, contenedor, operacion = '', resultado2;
    
   //función eval
   function S(i){ return doc.getElementById(i); }
   function res(){
       resultado2 = eval(operacion);
       cp.value = resultado2;
       operacion = '';
   }

   function as(bt) { 
    operacion += bt.innerHTML;//Obtenemos el valor de cada botón
    cp.value = operacion; //se muestra en pantalla la el valor de la operacion
    }

    function bclick(b) {
        b.onclick = function() { as(b); }
    }


    //Asignamos a cada variable de acuerdo a los valores que tenemos en nuestra calculadora el parámetro que se va a introcucir en la funcion eval
    cc = S('ccontenedor');
    cp = S('cpantalla');
    uno = S('uno');
    dos = S('dos');
    tres = S('tres');
    cuatro = S('cuatro');
    cinco = S('cinco');
    seis = S('seis');
    siete = S('siete');
    ocho = S('ocho');
    nueve = S('nueve');
    cero = S('cero');
    suma = S('suma');
    resta = S('resta');
    multiplicacion = S('multiplicacion');
    division = S('division');
    punto = S('punto');
    igual = S('igual');
    borar = S('borrar');

    bclick(uno);
    bclick(dos);
    bclick(tres);
    bclick(cuatro);
    bclick(cinco);
    bclick(seis);
    bclick(siete);
    bclick(ocho);
    bclick(nueve);
    bclick(cero);
    bclick(multiplicacion);
    bclick(suma);
    bclick(resta);
    bclick(punto);
    bclick(division);
	borrar.onclick = function(){ operacion = resultado2 = cp.value = ''; }//Inidcamos que en la pantalla no se mostrará nada
	igual.onclick = res;
    
                
   
      
})
window.addEventListener("load", function(){

    btngenerar.addEventListener('click',function(){


        let contenidoHTML="<table border=1>"
        for(i=1;i<=3;i++)
        {
            contenidoHTML+="<tr>"
            for(j=1;j<=3;j++)
            {
                contenidoHTML+="<td>"
                contenidoHTML+="Prueba"
                contenidoHTML+="</td>"
            }
            contenidoHTML+="</tr>"
        }
        contenidoHTML+="</table>"

        divcontenido.innerHTML=contenidoHTML;
    })


})
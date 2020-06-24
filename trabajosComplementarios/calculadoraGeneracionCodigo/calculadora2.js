window.addEventListener('load', function()
{

    let  contenidoHTML="<table>"
        let contador=0
        for(i=1;i<=6;i++)
        {
            contenidoHTML+="<tr>"
            for(j=1;j<=4;j++){
                if(i==1 && j==1){
                contenidoHTML+="<td colspan=4>"
                    contenidoHTML+=`<input type = "button" value ="" id ="pantalla"/>`
                contenidoHTML+="</td>"
                }else{
                    contenidoHTML+="<td>"
                    contenidoHTML+=`<button class=btnnumero value="${i}" title="${j}"> ${++contador}</button>`
                    contenidoHTML+="</td>"
                }
                
                    
            }
            contenidoHTML+="</tr>"
        }
        contenidoHTML+="</table>"
      
        contenedor.innerHTML=contenidoHTML


})
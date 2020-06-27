window.addEventListener('load', function()
{
    btngenerar.addEventListener("click",function(){
    let contenidoHTML= `
        <div><span id="divresultado"></span></div>
        <table>`
       

        let l=1
        for (i=1;i<=3;i++)
        {
            contenidoHTML+="<tr>"
            for(j=1;j<=3;j++)
            {
                
                contenidoHTML+="<td>"
                contenidoHTML+= `<button class="btnnumero" value="${l}" > ${l++} </button>`
                contenidoHTML+="</td>"
                
            }
            if(i==1)
            {
                contenidoHTML+=`<td>
                    <button class="btnnumero1" id="mas" value="+">+</button>
                </td>` 
            }
            if(i==2)
            {
                contenidoHTML+=`<td>
                    <button class="btnnumero1" id="menos" value="-">-</button>
                </td>` 
            }
            if(i==3)
            {
                contenidoHTML+=`<td>
                    <button class="btnnumero1" id="por" value="*">*</button>
                </td>` 
            }

        }
        contenidoHTML+=`<tr>
        <td>
            <button class="btnnumero1" id="punto" value=".">.</button>
        </td>
        <td>
            <button class="btnnumero1" id="cero" value="0">0</button>
        </td>
        <td>
            <button class="btnnumero1" id="igual">=</button>
        </td>
        <td>
            <button class="btnnumero1" id="div" value="/">/</button>
        </td>
        </tr>
        <tr>
        <td colspan="5">
            <button id="borrar">BORRAR</button>
        </td>
        </tr>`

        
        contenidoHTML+="</table>"
        
        

        divcontenedor.innerHTML=contenidoHTML
        

        document.querySelectorAll(".btnnumero").forEach(x => { 

            x.addEventListener('click',function(){
                divresultado.innerHTML=divresultado.innerHTML + x.value
            })

         })

         punto.addEventListener("click",function(){

            divresultado.innerHTML=divresultado.innerHTML + punto.value
         })
         cero.addEventListener("click",function(){

            divresultado.innerHTML=divresultado.innerHTML + cero.value
         })
         mas.addEventListener("click",function(){

            divresultado.innerHTML=divresultado.innerHTML + mas.value
         })
         por.addEventListener("click",function(){

            divresultado.innerHTML=divresultado.innerHTML + por.value
         })
         menos.addEventListener("click",function(){

            divresultado.innerHTML=divresultado.innerHTML + menos.value
         })
         div.addEventListener("click",function(){

            divresultado.innerHTML=divresultado.innerHTML + div.value
         })
         igual.addEventListener("click",function(){

            divresultado.innerHTML=eval(divresultado.innerHTML)
         })
         borrar.addEventListener("click",function(){
            let nuevo=""
            divresultado.innerHTML=nuevo
         })

         
    })


})
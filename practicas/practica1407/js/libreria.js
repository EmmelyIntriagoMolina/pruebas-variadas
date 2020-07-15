//variable global
var contador=0;

window.addEventListener('load',function(){

    btngenerar.addEventListener('click',function(){

        let html="<table border=1>"
        for(let i=0;i<10;i++)
        {
            html+="<tr>"
            for(let j=0;j<10;j++)
            {
                html+=`<td> <button class='boton' title='Hola' value= ${i*j}>.</button></td>`
            }
            html+="</tr>"
        }
        html+="</table>"

        contenido.innerHTML=html

        //recorrer los botones de la tabla segun su clase
        document.querySelectorAll('.boton').forEach(ele=>{
            //agregar a cada boton el evento click
            ele.addEventListener('click',function(){
                ele.innerHTML=++contador
            })
        })
    })
})
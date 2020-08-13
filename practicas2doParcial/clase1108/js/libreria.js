window.addEventListener('load',function(){

    //NUEVO
    btnnuevo.addEventListener('click',function(){
        txtcodigo.value="";
        txtdescripcion.value=""
    })

    //URL FIREBASE
    //CONSULTAR
    btnconsultar.addEventListener('click',function(){
        //UTILIZANDO EL MPETODO GET - CONSULTA
       let url=`https://practicas-10042.firebaseio.com/cursos/.json`
        fetch(url).then(resultado=>{
            return resultado.json();
            
        }).then(resultado2=>{
            //console.log(Object.entries(resultado2))

            let tablaHtml="<table border=1>";
            for(let elemento in resultado2)
            {
                tablaHtml+="<tr>"
                tablaHtml+=`<td> <button class='boton'>${resultado2[elemento].codigo}</button></td> <td> ${resultado2[elemento].descripcion }</td>`
            
                tablaHtml+="</tr>"
            }
            tablaHtml="</table>"
            divconsulta.innerHTML=tablaHtml
            
            document.querySelectorAll('boton').forEach(elemento=>{
                elemento.addEventListener('click',function(){
                   let url2=`https://practicas-10042.firebaseio.com/cursos/${elemento.innerHTML.trim}.json`
                    console.log(url2)

                    fetch(url2).the(respuesta=>{
                        return respuesta.json()
                    }).then(respuesta2=>{
                        txtcodigo.value=respuesta2.codigo;
                        txtdescripcion.value=respuesta2.descripcion
                    })
                })
            })

        }).catch(error=>{

            console.log(error)
        })
    })

    //GUARDAR
    
    btngrabar.addEventListener('click',function(){
        //metodo POST
        let url=`https://practicas-10042.firebaseio.com/cursos/.json`
        let cuerpo={codigo:txtcodigo.value, descripcion:txtdescripcion.value}
        
        fetch(url,{
            method:'POST',
            body:JSON.stringify(cuerpo) ,
            headers:{  //PARAMETROS PARA INDICARLE AL API QUÉ ESTOY ENVIANDO Y QUÉ QUIERO RECIBIR EJMP: JSON
                'Content-Type':'application/json'
            }

        }).then(resultado=>{
            return resultado.json();
            
        }).then(resultado2=>{
            console.log(resultado2)
        }).catch(error=>{
            console.error('Hubo un error al consultar',error)
        })
    })

    btngrabar2.addEventListener('click',function(){
        //metodo POST
        let url=`https://practicas-10042.firebaseio.com/cursos/${txtcodigo.value}.json`
        let cuerpo={codigo:txtcodigo.value, descripcion:txtdescripcion.value}
        
        fetch(url,{
            method:'PUT',
            body:JSON.stringify(cuerpo) ,
            headers:{  //PARAMETROS PARA INDICARLE AL API QUÉ ESTOY ENVIANDO Y QUÉ QUIERO RECIBIR EJMP: JSON
                'Content-Type':'application/json'
            }
        }).then(respuesta=>{
            return respuesta.json()
        }).then(respuesta2=>{
            console.log(respuesta2)
        }).catch(error=>{
            console.error('No se pudo grabar el curso',error)
        })
    })

    //ELIMINAR
    btneliminar.addEventListener('click',function(){
        //metodo POST
        let url=`https://practicas-10042.firebaseio.com/cursos/.json`
        
        fetch(url,{
            method:'DELETE'
        })
        .then(resultado=>{
            return resultado.json()
        }).then(resultado2=>{
            console.log(resultado2)
        }).catch(error=>{
            console.error('No se pudo eliminar el curso',error)
        })
    })
})
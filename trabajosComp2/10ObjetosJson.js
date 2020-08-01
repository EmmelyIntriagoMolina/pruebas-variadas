window.addEventListener('load',function(){
    btnconsultar.addEventListener('click',function(){

        fetch('./10ObjetosJson.json').then(respuesta=>{
            return respuesta.json()

        }).then(resultadoJson=>{
            
            resultadoJson.filter(ele=>{return ele.Conexiones[1]}).forEach(resultado=>{ 
                console.log(resultado.Nombre)
                console.log(resultado.Contacto)
                
            })
        }).catch(error=>{
            console.log(error)
        })

    })
})
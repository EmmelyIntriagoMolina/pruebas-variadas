window.addEventListener('load',function(){
    btnconsultar.addEventListener('click',function(){

        fetch('./objetosJson.json').then(respuesta=>{
            return respuesta.json()

        }).then(resultadoJson=>{
            resultadoJson.filter(ele=>{return ele.Codigo==1}).forEach(resultado=>{
                console.log(resultado.Descripcion)
            })
        }).catch(error=>{
            console.log(error)
        })

    })
})
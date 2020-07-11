window.addEventListener('load', function(){

    btnprocesar.addEventListener( 'click', function(){

        promesa2().then(promesa1).then(function(){
            console.log('todo se grabó correctamente')
        }).catch(error=>{
            console.log(error)
        }).then(function(){
            console.log('Desconectarse de la base de datos')
        })
       

    })


})

var promesa1=function(){
    return new Promise(function(resolver,cancelar)
    {
        setTimeout(function(){
            console.log('Grabar detalle de factura')
            resolver();
        
        }, 2000)
    });
}

var promesa2=function(){
    return new Promise(function (resolver,cancelar)
    {
        setTimeout(function(){
            console.log('Grabar cabecera de factura')
            resolver();
        
        }, 4000)
    });
}

var firebaseConfig = {
    apiKey: "AIzaSyAYZwGpk_017_9dQ-48c5ECvzUpJ5EcV5I",
    authDomain: "insumedventas-f8340.firebaseapp.com",
    databaseURL: "https://insumedventas-f8340.firebaseio.com",
    projectId: "insumedventas-f8340",
    storageBucket: "insumedventas-f8340.appspot.com",
    messagingSenderId: "1070813534780",
    appId: "1:1070813534780:web:bd82e5c6239b5a37fe8139",
    measurementId: "G-SV63QLGL98"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();

        window.addEventListener('load',function(){
                let idProducto= document.querySelector('#txtidProducto');
                let descripcion= document.querySelector('#txtdescripcion');
                let existencia= document.querySelector('#txtexistencia');
                let precio= document.querySelector('#precio');
                let proveedor= document.querySelector('#txtproveedor');
                
                let listado= document.querySelector('#listado');

                /*GUARDAR */
                document.querySelector('#btnguardar').addEventListener('click',function(){
                    firebase.database().ref('productos/'+ idProducto.value ).set({
                    idProducto: idProducto.value,
                    descripcion: descripcion.value,
                    existencia: existencia.value,
                    precio: precio.value,
                    proveedor: proveedor.value
                    })
                });

                /*CONSULTAR*/
                document.querySelector('#btnconsultar').addEventListener('click',function()
                {
                    firebase.database().ref('/productos').on('value',function(resultado) 
                    {
                        html='<table border=1>'
                            
                        resultado.forEach(function(resul) {
                            html+= `<tr><td>${resul.val().idProducto} </td>
                            <td> ${resul.val().descripcion}</td> 
                            <td> ${resul.val().existencia}</td> 
                            <td> ${resul.val().precio}</td> 
                            <td> ${resul.val().proveedor}</td> 
                            <td> <button class='accion' value=${resul.val().idProducto} >Editar</button> </td>
                            <td> <button class='accion' value=${resul.val().idProducto} >Eliminar</button></td> 
                            </tr>` 
                        });      
                        html+='</table>'
                        listado.innerHTML=html

                        document.querySelectorAll('.accion').forEach(elemento=>{
                            elemento.addEventListener('click',function()
                            {
                                accion(elemento.innerHTML, elemento.value)
                            })
                        });

                    });
                });

                /*ELIMINAR*/
                function accion(tipo, valor)
                {
                    if (tipo=='Eliminar')
                    {
                        firebase.database().ref('/productos/'+valor).remove().then(p=>{
                            alert('registro eliminado')
                        });
                    }
                    else
                    {
                        firebase.database().ref('/productos/'+valor).once('value',function(resultadoi){
                            let objetoRespuesta= resultadoi.val()
                            idProducto.value=objetoRespuesta.idProducto;
                            descripcion.value=objetoRespuesta.descripcion;
                            existencia.value=objetoRespuesta.existencia;
                            precio.value=objetoRespuesta.precio;
                            proveedor.value=objetoRespuesta.proveedor;
                        })
                    }
                        
                }
        })
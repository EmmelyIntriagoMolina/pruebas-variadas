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

    /*let idPedido= document.querySelector('#txtidPedido');
    let descripcion= document.querySelector('#txtdescripcion');
    let fecha= document.querySelector('#txtfecha');
    let cliente= document.querySelector('#txtcliente');
    let direccion= document.querySelector('#txtdir');
    let estado= document.querySelector('#txtestado');*/

    let listado= document.querySelector('#listado');

    

    /*GUARDAR 
    document.querySelector('#btnguardar').addEventListener('click',function(){
        firebase.database().ref('pedidos/'+ idPedido.value ).set({
        idPedido: idPedido.value,
        descripcion: descripcion.value,
        fecha: fecha.value,
        cliente: cliente.value,
        direccion: direccion.value,
        estado: estado.value
        })
    });*/

    /*CONSULTAR*/
    document.querySelector('#btnconsultar').addEventListener('click',function()
    {
        firebase.database().ref('/pedidos').on('value',function(resultado) 
        {
            html='<table>'
            html+="<thead>"
                html+="<tr>"
                html+="<th>Id</th>"
                html+="<th>Descripción</th>"
                html+="<th>Fecha</th>"
                html+="<th>Cliente</th>"
                html+="<th>Dirección</th>"
                
                html+="</tr>"
                html+="</thead>"
                resultado.forEach(function(resul) {
                html+= `<tr><td>${resul.val().idPedido} </td>
                <td> ${resul.val().descripcion}</td> 
                <td> ${resul.val().fecha}</td> 
                <td> ${resul.val().cliente}</td> 
                <td> ${resul.val().direccion}</td> 
                
                <td> <button class='accion' value=${resul.val().idPedido} id='btnedit'>Aceptar</button> </td>
                <td> <button class='accion' value=${resul.val().idPedido} id='btnelim'>Rechazar</button></td> 
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

    btnedit.addEventListener('click',function(){alert("Pedido Aceptado")})

    /*ELIMINAR*/
    function accion(tipo, valor)
    {
        if (tipo=='Eliminar')
        {
            firebase.database().ref('/pedidos/'+valor).remove().then(p=>{
                alert('Registro eliminado')
            });
        }
        else
        {
            firebase.database().ref('/pedidos/'+valor).once('value',function(resultadoi){
                let objetoRespuesta= resultadoi.val()
                idPedido.value=objetoRespuesta.idPedido;
                descripcion.value=objetoRespuesta.descripcion;
                fecha.value=objetoRespuesta.fecha;
                cliente.value=objetoRespuesta.cliente;
                direccion.value=objetoRespuesta.direccion;
                estado.value=objetoRespuesta.estado;
            })
        }
            
    }


})
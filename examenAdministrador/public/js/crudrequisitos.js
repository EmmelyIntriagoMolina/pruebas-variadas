  var firebaseConfig = {
    apiKey: "AIzaSyAdAeCFqT0svHKXHrV3sPqYBZh0BNaDOi8",
    authDomain: "secretariacliente.firebaseapp.com",
    databaseURL: "https://secretariacliente.firebaseio.com",
    projectId: "secretariacliente",
    storageBucket: "secretariacliente.appspot.com",
    messagingSenderId: "861819209520",
    appId: "1:861819209520:web:5bc83cfb957c57c2a0eaf5"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

window.addEventListener('load',function(){

    let codigo= document.querySelector('#txtcodigo');
    let tipo= document.querySelector('#txttipo');
    let fecha= document.querySelector('#txtfecha');
    let personaInv= document.querySelector('#txtpersonaInv');
    let tiempo= document.querySelector('#txttiempo');
    let responsable= document.querySelector('#txtresponsable');
    let estado= document.querySelector('#txtestado');
    let idR=document.querySelectorAll('txtid')
              
    let listado= document.querySelector('#listado');

    document.querySelector('#btnguardar').addEventListener('click',function(){
        firebase.database().ref('solicitudes/'+ codigo.value+'/requisito/'+idR.value ).set({
           
            idR:idR.value,
            tipo: tipo.value,
            fecha: fecha.value,
            personaInv: personaInv.value,
            tiempo: tiempo.value,
            responsable: responsable.value,
            estado: estado.value
        })
    });

    /*CONSULTAR*/
    document.querySelector('#btnconsultar').addEventListener('click',function()
    {
        firebase.database().ref('solicitudes/'+ codigo.value+'/requisito').on('value',function(resultado) 
        {
            html='<table>'
            html+="<thead>"
                html+="<tr>"
                html+="<th>Id</th>"
                html+="<th>Tipo</th>"
                html+="<th>Fecha</th>"
                html+="<th>Persona</th>"
                html+="<th>Tiempo</th>"
                html+="<th>Responsble</th>"
                html+="<th>Estado</th>"
                html+="</tr>"
                html+="</thead>"
            resultado.forEach(function(resul) {
                html+= `<td> ${resul.val().idR}</td> 
               
                <td> ${resul.val().tipo}</td> 
                <td> ${resul.val().fecha}</td> 
                <td> ${resul.val().personaInv}</td> 
                <td> ${resul.val().tiempo}</td>
                <td> ${resul.val().responsable}</td>
                <td> ${resul.val().estado}</td>  
                <td> <button class='accion' value=${resul.val().idR} id='btnedit'>Editar</button> </td>
                <td> <button class='accion' value=${resul.val().idR} id='btnelim'>Rechazar</button></td> 
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
    function accion(tipo2, valor)
    {
        let numero=0;
        if (tipo2=='Rechazar')
        {
            firebase.database().ref('solicitudes/'+codigo.value+'/requisito/'+numero).remove().then(p=>{
                alert('registro eliminado')
            });
            numero++
        }
        
        else
        {
            
            firebase.database().ref('solicitudes/'+codigo.value+'/requisito/'+numero).once('value',function(resultadoi){
                let objetoRespuesta= resultadoi.val()
                idR.value=objetoRespuesta.idR;
                tipo.value=objetoRespuesta.tipo;
                fecha.value=objetoRespuesta.fecha;
                personaInv.value=objetoRespuesta.personaInv;
                tiempo.value=objetoRespuesta.tiempo;
                responsable.value=objetoRespuesta.responsable;
                estado.value=objetoRespuesta.estado;
            })
            numero++
        }
            
    }

    //Concluidos
    document.querySelector('#btnconcluido').addEventListener('click',function(){
        
            let contador=0;
            if(estado.value=='Concluido'){
                contador++
            }
            alert("El número de requisitos concluidos es: "+contador)
            
        
    })
        
})
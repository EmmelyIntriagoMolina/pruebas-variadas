window.addEventListener('load',function(){

    txtRuc.addEventListener('blur',function(){

        divMensaje.innerHTML=""
        if(txtRuc.value.length!=13)
        {
            divMensaje.innerHTML="El RUC debe contener 13 dígitos <br>"
        }
        if (!validarRUC(txtRuc.value))
        {
            divMensaje.innerHTML+="No cumple los criterios de validacion del SRI <br>"
        }
        if (txtRuc.value.substr(10,13)!=001){
            divMensaje.innerHTML+="Los últimos 3 dígitos no pertenecen al RUC"
        }
        let indicador=txtRuc.value.substr(2,3)
        if(indicador<6){
            divMensaje.innerHTML+="El RUC corresponde a una persona Natural"
        }
        if(indicador==6){
            divMensaje.innerHTML+="El RUC corresponde a una sociedad privada"
        }
    
        if(indicador==9){
            divMensaje.innerHTML+="El RUC corresponde a una sociedad pública"
        }
    })
})

function validarRUC(parametro)
{   
    if(parametro.length!=13) return false;
    let semaforo=false;
    calculo=0;
    parametro.substr(0,9).split('').forEach(element => { //dividir los numeros, ponerlos como un arreglo y recorrerlos
        let numeroActual =semaforo ? parseInt(element): parseInt(element)*2;
        calculo+=numeroActual>9 ? numeroActual-9: numeroActual;
        semaforo=!semaforo;
    
    })
        
    while(calculo>0) calculo-=10;
    return parseInt(parametro.substr(9)) + calculo==0;
     
}
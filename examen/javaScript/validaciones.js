window.addEventListener('load',function()
{

    //VALIDAR NOMBRE
    txtnombre.addEventListener('blur',function()
    {
        mensajeNombre.innerHTML=""
        if(!validarNumeros(txtnombre.value)){
            mensajeNombre.innerHTML+=" El campo no puede contener números <br>"
        }

    })

    
    //VALIDAR RUC
    ruc.addEventListener('blur',function()
    {
        mensajeRuc.innerHTML=""
        let  indicador=ruc.value.substr(2,3)

        if(ruc.value=="")
        {
            mensajeRuc.innerHTML+="No has ingresado ningún dato, porfavor ingresar los datos correspondientes.<br>";
        }
        if (ruc.value.length != 13 )
        {
            mensajeRuc.innerHTML+="El RUC debe contener 13 dígitos <br> "
        }
        
        if  (ruc.value.substr (10,13)!=001) {
            mensajeRuc.innerHTML+="Los últimos 3 dígitos no pertenecen al RUC "
        }
        
        if (indicador >=0 && indicador< 6) {
            mensajeRuc.innerHTML+="El RUC corresponde a una persona Natural "
        }
        if (indicador == 6) {
            mensajeRuc.innerHTML+="El RUC corresponde a una sociedad privada "
        }
    
        if (indicador == 9) {
            mensajeRuc.innerHTML+="El RUC corresponde a una sociedad pública "
        }
    })

    
    

    //VALIDAR LONGITUD
    txtLongitud.addEventListener('blur',function()
    {
        mensajeLongitud2.innerHTML=""
        if(validarNumerosSi(txtLongitud.value))
        {
            mensajeLongitud2.innerHTML+="Ingrese números y decimales separados con .";
        }
        if(txtLongitud.value<-180 || txtLongitud.value >180){
            mensajeLongitud2.innerHTML+="La Longitud ingresada no es correcta";
        }
    })

    //VALIDAR  LATITUD
    txtLatitud.addEventListener('blur',function()
    {
        mensajeLatitud2.innerHTML=""
        if(validarNumerosSi(txtLatitud.value))
        {
            mensajeLatitud2.innerHTML+="Ingrese números y decimales separados con punto";
        }
        if(txtLatitud.value<-90 || txtLatitud.value>90){
            mensajeLatitud2.innerHTML+="La Latitud ingresada no es correcta";
        }
    })
    
    //VALIDAR FILAS
    nFilas.addEventListener('blur',function(){
        mensajeFilas.innerHTML=""
        if(nFilas.value<=0 || nFilas.value>5){
            mensajeFilas.innerHTML+="Ingrese un valor entre 1 y 5"
            
        }
        if(validarNumerosSi(nFilas.value))
        {
            mensajeFilas.innerHTML+="Solo puede ingresar números";
        }
    })

    
    //VALIDAR COLUMNAS
    nColumnas.addEventListener('blur',function(){
        mensajeColumnas.innerHTML=""
        if(nColumnas.value<=0 || nColumnas.value>5){
            mensajeColumnas.innerHTML+="Ingrese un valor entre 1 y 5"
            
        }
        if(validarNumerosSi(nColumnas.value))
        {
            mensajeColumnas.innerHTML+="Solo puede ingresar números";
        }
    })
})

//FUNCIÓN VALIDAR QUE UNA CADENA STRING NO TENGA NUMEROS
function validarNumeros(parametro)
{
    let numeros="0123456789"
    for(let i=0; i<parametro.length; i++)
    {
        if (numeros.indexOf(parametro.charAt(i),0)==-1)
        {
            return 1
        }else{
            return 0
        }
    }
}

//FUNCION VALIDAR QUE UN CAMPO NO TENGA LETRAS
function validarNumerosSi(parametro){

    let letras="abcdefghyjklmnñopqrstuvwxyzAABCDFEFGHJIKLÑOPQRSTUVWXYZ,";

    parametro = parametro.toLowerCase();
    for(i=0; i<parametro.length; i++){
        if (letras.indexOf(parametro.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
}
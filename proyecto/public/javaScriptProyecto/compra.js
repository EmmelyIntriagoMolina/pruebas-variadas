window.addEventListener('load', function()
{
    btnGenerarReporte.addEventListener('click', function()
    {
            arr=
            [
                ["Alcohol Weir", "$3,00"],
                ["Alcohol en Gel Dr Farma","$3,50 c/u",],
                ["Alcohol en Gel Elite", "$3,50 c/u",],
                ["Alcohol en Gel Algabo", "$4,50 c/u",],
                ["Alcohol en Gel Weir", "$4,50 c/u"],
            ]
            convertirArregloEnTabla(arr)
    });

    
});

function convertirArregloEnTabla(parreglo)
    {
            
        let html="<table border=1 id=tablaProducto>"
        html+="<thead>"
        html+="<tr>"
        html+="<th id=producto>Producto</th>"
        html+="<th id=producto>Total</th>"
        html+="</tr>"

        parreglo.forEach(elemento=>
            {
                
                html+="<tr>"
                elemento.forEach(col=>
                {
                  html+=`<td> ${col} </td>`
                })
            html+="</tr>"
            
            })
        html+="<tr>"
            html+="<th>Subtotal</th>"
            html+="<td>$19,00</td>"
        html+="</tr>"
        html+="<tr>"
            html+="<th>Envío</th>"
            html+="<td>$2,00</td>"
        html+="</tr>"
        html+="<tr>"
            html+="<th>Total</th>"
            html+="<td>$21,00</td>"
        html+="</tr>"
        html+="<tr>"
            html+="<th>Forma de Pago</th>"
            html+="<td><select class=formaPago name=pago id=pago> <option value=visa>VISA</option><option value=mastercard>MasterCard</option><option value=american>American Express</option> </select></td>"
        html+="</tr>"
        html+="<tr>"
            html+="<th>Número de Tarjeta</th>"
            html+="<td><input type=text required></td>"
        html+="</tr>"
        html+="</table>";
        
        html+="<a href=pago.html><button id=btnFinalizar>Confirmar Compra </button></a>"
        
        divReporte.innerHTML=html
        

        
        
    }
    

    
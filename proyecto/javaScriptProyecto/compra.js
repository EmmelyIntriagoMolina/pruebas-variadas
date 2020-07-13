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
            
        let html="<table border=1>"
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
        html+="</table>";
        
        html+="<button id=btnFinalizar>Finalizar Compra</button>"
        divReporte.innerHTML=html
    
    }

    btnFinalizar.addEventListener('click', function(){alert("Compra Realizada con Éxito")})
window.addEventListener('load', function(){
    
    btngenerar1.addEventListener('click', function(){
        
        arr=
        [
            [1, "Emmely Intriago", "1317910071", 350],
            [2, "Carlos Loor", "1317910071", 850],
            [3, "Juan Pincay", "1234567891", 750]
        
        ]

        convertirArregloEnTabla(arr);
    
    });

    btngenerar2.addEventListener('click', function(){

        arreglo=new Array(5);
        
        for(let i=0;i<5;i++)
        {
            arreglo[i]= new Array(5);

            for(let j=0;j<5;j++)
            {
                arreglo[i][j]=777;
            }
        }

        arreglo[2][2]=888;
        convertirArregloEnTabla(arreglo)
    })
})

function convertirArregloEnTabla(parreglo)
{
    let html="<table border=1>"

    
    parreglo.forEach(elemento=>{
        html+="<tr>"
        elemento.forEach(col=>{
            html+=`<td> ${col} </td>`
        })
        html+="</tr>"
    })
    html+="</table>"
    divtabla.innerHTML=html
}
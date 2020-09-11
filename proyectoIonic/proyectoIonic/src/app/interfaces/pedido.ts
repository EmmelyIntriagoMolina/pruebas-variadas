export class Pedido
{
    idPedido: string
    descripcion: string
    fecha:string
    cliente:string 
    direccion:string
    productos:agProducto[]

    constructor()
{
    this.idPedido='';
}
}

export class agProducto
{
    idProducto:string
    descripcion:string
    cantidad:string
}


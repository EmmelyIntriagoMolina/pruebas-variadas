export class Solicitud
{
    codigo:string
    identificacion:string
    requisito:agRequisito[]

    constructor()
    {
        this.codigo='';
    }
}

export class agRequisito
{
    idR:number
    tipo:string
    fecha:string
    personaInv:string
    estado:string
}
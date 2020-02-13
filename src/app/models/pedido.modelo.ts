export class PedidoModel {
    constructor (
    public nombredueno: string,
    public nombremascota: string,
    public pack: string,
    public tematica: string,
    public sabor: string,
    public gorrito: string,
    public diseno: string,
    public costo: number,
    public fechapedido: Date,
    public fechaentrega: Date,
    public observaciones: string,
    public pago?: any[],
    public id?: string,
    ) {

    }
    
}
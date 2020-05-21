import { ItemPedido } from "./ItemPedido";
import { Estabelecimento } from "./Estabelecimento";

export class Comanda
{
    public id: number;
    public horaInit: string;
    public horaFinal: string;
    public data: string;
    public numPessoas: number;
    public total: number;
    public pocentGarcom: number;
    public couvertArt: number;
    public pedido: ItemPedido;
    public local: Estabelecimento;
}
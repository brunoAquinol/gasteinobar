import {Product} from './Produto';
import {Comanda} from './Comanda';

export class ItemPedido
{
    public id: number;
    public product: Product;
    public comanda: Comanda;
    public unityQt: number;
    public subTotal: number;

}
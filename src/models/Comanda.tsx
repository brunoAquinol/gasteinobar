import { ItemPedido } from "./ItemPedido";
import { Estabelecimento } from "./Estabelecimento";
import {DatabaseConnection} from '../database/db-connection'

const table = "animal";
const db = DatabaseConnection.getConnection();

export class Comanda
{

    constructor(id?: number, local?: Estabelecimento){
        this.id = id;
        this.local = local;
        var getData = new Date;
        this.horaInit = getData.getHours()+':'+ getData.getMinutes();
        this.data = getData.getDate()+'/'+ (getData.getMonth()+1)+ '/' + getData.getFullYear();
    }

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

/*
    static createOrderPad(param: Estabelecimento){
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (local) values (?)`,
                [,param.nome], 
                (_, { insertId, rows }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
            }));
    }

    static addOrder(){
        null;
    }

    static deleteOrder(){
        null;
    }

    static printOrder(){
        null;
    }
*/
}

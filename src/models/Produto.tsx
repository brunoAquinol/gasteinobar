import {CategProd} from './CategProd'
/*import {DatabaseConnection} from '../database/db-connection'

const db = DatabaseConnection.getConnection();
*/
export class Product
{
    public id: number;
    public nome: string;
    public categoria: CategProd;
    /*static addProduct(nome: string, param: CategProd)
    {
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`insert into produto (nome, idCategoria) 
                values (?, ?)`, 
                [nome, param.id], 
                (_, { insertId, rows }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
        }));
    }

    public getProduct()
    {
        null;
    }
*/
}
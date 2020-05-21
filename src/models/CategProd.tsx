/*
import {DatabaseConnection} from '../database/db-connection'
const db = DatabaseConnection.getConnection();
*/
export class CategProd
{
    public id: number;
    public nome: string; 
/*
    static addCatProd(nome: string){
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`insert into categProd (nome) 
                values (?)`, 
                [nome], 
                (_, { insertId, rows }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId)
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
            }));
    }

    static getCatProd(id: number){
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from categProd where id=?`, [id], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);

        }));
    }
    */
}

import {DatabaseConnection} from '../database/db-connection';

import Estabelecimento from '../models/Estabelecimento';
import Message from '../models/Message.js'

const db = DatabaseConnection.getConnection();

export default class EstablishmentController{

 static addEstablishment (param){
    return new Promise((resolve, reject) =>db.transaction(
        tx => {
            tx.executeSql(`insert into estabelecimento (nome) values (?)`, 
            [param.nome], 
            (_, { insertId, rows }) => {
                console.log("id insert: " + insertId);
                resolve(insertId)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }));
    }

    static getAllEstablishment()
    {
        return new Promise((resolve, reject) => db.transaction(
            tx =>{
                tx.executeSql(`SELECT * FROM estabelecimento`, [],
                (_,{ rows}) => {
                    resolve(rows)
                }),(sqlError) =>{
                    console.log(sqlError);
                }
            }, (txError) => {
                console.log(txError);
            }
        ));
    }

}
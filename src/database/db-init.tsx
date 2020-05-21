import {DatabaseConnection} from './db-connection';

var db = null;

export default class DatabaseInit{
    constructor(){
        db = DatabaseConnection.getConnection();
        db.exec([{sql: 'PRAGMA foreign_keys = ON;', args:[]}], false, () => console.log('Foreign keys turned on'));
        this.InitDb();
    }

    private InitDb(){
        var sql = [
            `DROP TABLE IF EXISTS categProd;`,
            `DROP TABLE IF EXISTS produto;`,
            `DROP TABLE IF EXISTS itemPedido;`,
            `DROP TABLE IF EXISTS comanda;`,
            `DROP TABLE IF EXISTS estabelecimento;`,

            `create table if not exists categProd(
                id integer primary key autoincrement,
                nome text,
            );`,
            
            `create table if not exists produto(
                id integer primary key autoincrement,
                nome text,
                foreign key (idCategoria) references categProd (id)
            );`,

            `create table if not exists estabelecimento(
                id integer primary key autoincrement,
                nome text
            );`,

            `create table if not exists itemPedido(
                id integer primary key autoincrement,
                foreign key (idProduto) references produto (id),
                foreign key (idComanda) references comanda (id),
                quantidade integer,
                valorUnidade double,
                subtotal double            
            );`,

            `create table if not exists comanda(
                id integer primary key autoincrement,
                horaInicial text,
                horaFinal text,
                data text,
                qtdDivisao integer,
                porcentGarcom interger,
                couvertArt double,
                valGarcom double,
                valCouvert double,
                totalSemDivisao double,
                totalComDivisao double,
                foreign key (idPedido) references itemPedido (id),
                foreign key (idLocal) references estabelecimento (id)
            );`,

            `insert into categProd (nome) values('Bebida');`,
            `insert into categProd (nome) values('Petiscos');`
        ];

        db.transaction(
            tx => {
                for (var i=0; i < sql.length; i++){
                    console.log("execute o sql: " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) =>{
                console.log("error call back: "+JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back");
            }
        )
    }
}
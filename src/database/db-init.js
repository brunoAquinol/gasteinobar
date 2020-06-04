import {DatabaseConnection} from './db-connection';

var db = null;

export default class DatabaseInit{
    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
    );
        this.InitDb();
    }

    InitDb(){
        var sql = [

            `CREATE TABLE if not exists categProd(
                id integer primary key autoincrement,
                nome text
            );`,
            
            `CREATE TABLE if not exists produto(
                id integer primary key autoincrement,
                nome text,
                valor double,
				idCategoria integer,
                foreign key (idCategoria) references categProd (id)
            );`,

            `CREATE TABLE if not exists estabelecimento(
                id integer primary key autoincrement,
                nome text not null
            );`,

            `CREATE TABLE if not exists itemPedido(
                id integer primary key autoincrement,
				idProduto INTEGER,
				idComanda INTEGER,
                quantidade integer,
                valorUnidade double,
                subtotal double,
                foreign key (idProduto) references produto (id),
                foreign key (idComanda) references comanda (id)				
            );`,

            `CREATE TABLE if not exists comanda(
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
				idPedido integer,
				idLocal integer,
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
import * as Sqlite from "expo-sqlite";

export const DatabaseConnection ={
    getConnection: () => Sqlite.openDatabase("database.db"),
};
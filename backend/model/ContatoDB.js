let mysql = require('mysql');
let config = require('config');

class ContatoDB {

    static connect() {

        let dbConfig = config.get('mysqlConfig');
        let connection = mysql.createConnection(dbConfig);

        connection.connect();

        return connection;

    }

}
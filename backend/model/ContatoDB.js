let mysql = require('mysql');
let config = require('config');

class ContatoDB {

    static connect() {

        let dbConfig = config.get('mysqlConfig');
        let connection = mysql.createConnection(dbConfig);

        connection.connect();

        return connection;

    }

    static getContatos() {
        return new Promise((resolve, reject) => {
            let connection = ContatoDB.connect();

            let sql = "select * from contato";

            connection.createQuery(sql, (err, results, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }

            });

            connection.end();
        });

    }

    static ContatoById(id) {
        return new Promise((resolve, reject) => {
            let connection = ContatoDB.connect();

            let sql = "select * from contato where id=?";
            let id = id;

            connection.createQuery(sql, id, (err, results, fields) => {

                if (err) {
                    reject(err);
                } else {
                    let contato = results[0];
                    resolve(contato);
                }

            });

            connection.end();
        });
    }

    static save(contato) {
        return new Promise((resolve, reject) => {
            let connection = ContatoDB.connect();

            let sql = "insert into contato set ?";

            connection.createQuery(sql, contato, (err, results, fields) => {

                if (err) {
                    reject(err);
                } else {
                    contato.id = results.insertId;
                    resolve(contato);
                }

            });

            connection.end();
        });
    }

    static update(contato) {
        return new Promise((resolve, reject) => {
            let connection = ContatoDB.connect();

            let sql = "update contato set ? where id = ?";
            let id = contato.id;

            connection.createQuery(sql, [contato, id], (err, results, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }

            });

            connection.end();
        });
    }

    static deleteById(id) {
        return new Promise((resolve, reject) => {
            let connection = ContatoDB.connect();

            let sql = "delete from contato where id=?";
            let id = id;

            connection.createQuery(sql, id, (err, results, fields) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results.affectedRows);
                }

            });

            connection.end();
        });
    }

}

module.exports = ContatoDB;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'843228',
    database: 'authDB'
});

module.exports = connection;
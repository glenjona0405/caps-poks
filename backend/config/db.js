// 1. Panggil librarynya mysql dulu
const mysql = require('mysql2');

//2. Setting connection mysqlnya
/*const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Bud1moncor.',
    database: 'caps_poks'
})
*/
const db = mysql.createConnection({
    host: "crossover.proxy.rlwy.net",
    user: 'root',
    port : 57320,
    password: 'belyGiZLjootPKRbkiPOCIatVqSZngcr',
    database: 'railway'
})

//3. konek ke db
db.connect((err) => {
    if(err) {
        console.log('Koneksi gagal : ', err.message)
    } else
        console.log('Sudah terkonek')
});

module.exports = db;
// 1. Panggil librarynya mysql dulu
const mysql = require('mysql2');

//2. Setting connection mysqlnya
const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Bud1moncor.',
    database: 'caps_poks'
})

//3. konek ke db
db.connect((err) => {
    if(err) {
        console.log('Koneksi gagal : ', err.message)
    } else
        console.log('Sudah terkonek')
});

module.exports = db;
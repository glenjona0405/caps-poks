require('dotenv').config();
// 1. Panggil librarynya mysql dulu
const mysql = require('mysql2');


//2. Setting connection mysqlnya
/*const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Bud1moncor.',
    database: 'caps_poks'
})

const db = mysql.createConnection({
    host: "caps-poks-production.up.railway.app",
    user: 'root',
    port : 5000,
    password: 'belyGiZLjootPKRbkiPOCIatVqSZngcr',
    database: 'railway'
})
*/

const db = mysql.createConnection({
  host: process.env.DB_HOST,        // dari Railway
  user: process.env.DB_USER,        // dari Railway
  port: process.env.DB_PORT,        // dari Railway
  password: process.env.DB_PASSWORD,// dari Railway
  database: process.env.DB_NAME     // dari Railway
});

//3. konek ke db
db.connect((err) => {
    if(err) {
        console.log('Koneksi gagal : ', err.message)
    } else
        console.log('Sudah terkonek ke db railway')
});

module.exports = db;
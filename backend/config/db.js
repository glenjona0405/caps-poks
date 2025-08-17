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

const urlDB = "mysql://root:qAMLLuJrboCwuzBifpvzZauwEVyEaEKJ@crossover.proxy.rlwy.net:28425/railway"

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,        // dari Railway
  user: process.env.MYSQLUSER,        // dari Railway
  port: process.env.MYSQLPORT,        // dari Railway
  password: process.env.MYSQLPASSWORD,// dari Railway
  database: process.env.MYSQLNAME     // dari Railway
});

//3. konek ke db
db.connect((err) => {
    if(err) {
        console.log('Koneksi gagal : ', err.message)
    } else
        console.log('Sudah terkonek ke db railway')
});

module.exports = db;
require('dotenv').config();
// 1. Panggil librarynya mysql dulu
const mysql = require('mysql2');


//2. Setting connection mysqlnya

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;

const db = mysql.createConnection(urlDB);

//3. konek ke db
db.connect((err) => {
    if(err) {
        console.log('Koneksi gagal : ', err.message)
    } else
        console.log('Sudah terkonek ke db railway');
        console.log(process.env.MYSQLHOST);
        console.log(process.env.MYSQLUSER);
        console.log(process.env.MYSQLPORT);
        console.log(process.env.MYSQLPASSWORD);
        console.log(process.env.MYSQLDATABASE);
});

module.exports = db;
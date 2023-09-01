import mysql from 'mysql2/promise';

const dbpool = mysql.createPool ({
    host:"localhost",
    user:"root",
    password: "sayaalfin1",
    database: "batch_9",
    port : 3306
})

export default dbpool;
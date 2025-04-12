const Pool = require("pg").Pool //this is the connection to the database

//set your data base info
const pool = new Pool({
    user: "postgres",
    password: "amir1234",
    database: "luminia",
    host: "localhost",
    port: 5432
})

module.exports = pool;
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tienda"
});

connection.connect(error => {
  if (error) throw error;
  console.log("BD conectada");
});

module.exports = connection;

var mysql = require("mysql");

var connection  
if(process.env.JAWSDB_URL){
connection= mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: "x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "root",
    password: "root",
    database: "burgers_db"
});

};

connection.connect()

// Export connection for our ORM to use.
module.exports = connection;
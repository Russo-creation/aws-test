var express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const { join } = require("path");

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mysql = require("mysql");

var connection_mysql = mysql.createPool({
  host: "database_mysql",
  user: "user",
  password: "password",
  database: "mysql_test",
});

//server entry point
app.get("/", (req, res) => {
  res.send("woah! thats my conteneizer node.js backend with new script");
});

app.get("/node_status", (req, res) => {
  // res.json({ status: "check" });

  connection_mysql.getConnection(function (err, connection) {
    connection.query("SELECT * FROM mysql_check_test", function (err, rows) {
      connection.release();
      if (err) throw err;

      console.log(rows.length);
      res.send(JSON.stringify(rows));
    });
  });

  // connection_mysql.connect(function (err) {
  //  if (err) throw err;
  //  console.log("##Successfully connected to MySQL container##");
  //});
});

//app listen on port 4000

app.listen(4007, (err) => {
  if (err) throw err;
  console.log("Server is up!");
});

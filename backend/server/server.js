const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const mysql = require("mysql");
const schema = require("./schema/schema");

var app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//server entry point node test
app.get("/nodestatus", (req, res) => {
  res.send(JSON.stringify({ status: 1 }));
});

//server entry point graphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//server setting for MySql connection

var connection_mysql = mysql.createPool({
  host: process.env.NODE_DATABASE_HOST || "127.0.0.1:3306",
  user: "user",
  password: "password",
  database: "mysql_test",
});

//server entry point MySql
app.get("/mysqlstatus", (req, res) => {
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

module.exports = app;

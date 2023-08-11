/*
  This module is having security details for the MySQL Database and it can be imported to make connection
  and fetch required data using SQL queries
*/

const mysql = require("mysql2");

const details = {
  host: "localhost",
  user: "root",
  password: "vatsal2003",
  database: "tms",
};

ConnectDB = () => {
  const connection = mysql.createConnection(details);
  return connection;
};

module.exports = ConnectDB;

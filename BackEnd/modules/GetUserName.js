const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");

const util = require("util");
const { openSync } = require("fs");

const GetUserName = (email) => {
  const connection = ConnectDB();
  console.log("done");
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        console.error("Error connecting to the database:", error);
        reject(error);
      } else {
        console.log("Connected to the database");

        const Query1 =
          "select user_name from user_table where user_email='" + email + "'";

        connection.query(Query1, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            // console.log(result[0]);
            // console.log("it was");
            resolve(result);
            // resolve(result);
          }
        });
      }
    });
  });
  connection.end();
};

module.exports = GetUserName;

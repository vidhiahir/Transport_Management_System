/*
  This module can be used to fetch the list object for the service level options available to the client.
*/

const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");
const util = require("util");
const { openSync } = require("fs");
const FetchServiceLevels = () => {
  const connection = ConnectDB();
  console.log("done");
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        console.error("Error connecting to the database:", error);
        reject(error);
      } else {
        console.log("Connected to the database");

        const Query =
          "Select ServiceLevelID as id, ServiceLevelCode as code, Description as name from mas_servicelevel";

        connection.query(Query, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log("success");
            resolve(result);
          }
        });
      }
    });
  });
  connection.end();
};

module.exports = FetchServiceLevels;

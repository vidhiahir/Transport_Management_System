/*
  This module can be used to fetch the list object for the accesorials options available to the client.
*/

const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");

const util = require("util");
const { openSync } = require("fs");

const FetchSavedLocations = () => {
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
          "select id,company_name, country,state,postal from mas_loc";

        connection.query(Query, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log("Saved Locations sent");
            resolve(result);
          }
        });
      }
    });
  });
  connection.end();
};

module.exports = FetchSavedLocations;

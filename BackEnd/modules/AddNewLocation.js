/*
  This module can be used to fetch the list object for the accesorials options available to the client.
*/

// table is mas_loc

const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");

const util = require("util");
const { openSync } = require("fs");

const AddNewLocation = (props) => {
  const { company_name, country, state, postal } = props;
  const connection = ConnectDB();
  console.log("done");
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        console.error("Error connecting to the database:", error);
        reject(error);
      } else {
        console.log("Connected to the database");

        let inputs = [company_name, country, state, postal];
        const Query = "call AddLocation(?,?,?,?)";

        connection.query(Query, inputs, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log("New Location added");

            resolve(result);
          }
        });
      }
    });
  });
  connection.end();
};

module.exports = AddNewLocation;

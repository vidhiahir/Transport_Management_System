/*
  This module can be used to fetch the list object for the accesorials options available to the client.
*/

const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");

const util = require("util");
const { openSync } = require("fs");

const FetchShipments = () => {
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
          "select s.load_no as 'load', s.ship_date as date, s.shipper, s.consignee, s.weight, s.carrier, s.status, l.o_country,l.o_state, l.r_country,l.r_state from shipments as s join loadlocation as l on s.load_no=l.loadno ";

        connection.query(Query, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log("Shipments data sent");

            resolve(result);
          }
        });
      }
    });
  });
  connection.end();
};

module.exports = FetchShipments;

/*
  This module can be used to fetch the list object for the accesorials options available to the client.
*/

const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");

const util = require("util");
const { openSync } = require("fs");

const GetCounts = () => {
  const connection = ConnectDB();
  console.log("done");
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        console.error("Error connecting to the database:", error);
        reject(error);
      } else {
        console.log("Connected to the database");

        let arr = [];
        const Query1 = "select count(*) as c from shipments";

        connection.query(Query1, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log(result);
            arr.push(result[0].c);
            // resolve(result);
          }
        });
        const Query2 =
          "select count(*) as c from shipments where status='dispatched' ";
        connection.query(Query2, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log(result);
            arr.push(result[0].c);
            // resolve(arr);
          }
        });
        const Query3 =
          "select count(*) as c from shipments where status='in transit' ";
        connection.query(Query3, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log(result);
            arr.push(result[0].c);
            // resolve(arr);
          }
        });
        const Query4 =
          "select count(*) as c from shipments where status='out for delivery' ";
        connection.query(Query4, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log(result);
            arr.push(result[0].c);
            // resolve(arr);
          }
        });
        const Query5 =
          "select count(*) as c from shipments where status='delivered' ";
        connection.query(Query5, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log(result);
            arr.push(result[0].c);
            resolve(arr);
          }
        });
      }
    });
  });
  connection.end();
};

module.exports = GetCounts;

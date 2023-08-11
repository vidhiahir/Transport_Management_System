/*
{
  "length": 10.5,
  "width": 5.2,
  "height": 3.8,
  "package_type": "Box",
  "stackable": true,
  "hazardous": false,
  "PCF": 25.6,
  "class": 3,
  "value_per_unit": 12.99
}
*/
const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");

const util = require("util");
const { openSync } = require("fs");

const AddNewLocation = (props) => {
  const {
    length,
    width,
    height,
    package_type,
    stackable,
    hazardous,
    PCF,
    product_class,
    value_per_unit,
  } = props;
  const connection = ConnectDB();
  console.log("done");
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        console.error("Error connecting to the database:", error);
        reject(error);
      } else {
        console.log("Connected to the database");

        let inputs = [
          length,
          width,
          height,
          package_type,
          stackable,
          hazardous,
          PCF,
          product_class,
          value_per_unit,
        ];
        const Query = "call insert_product(?,?,?,?,?,?,?,?,?)";

        connection.query(Query, inputs, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            console.log(" New Product added");

            resolve(result);
          }
        });
      }
    });
  });
  connection.end();
};

module.exports = AddNewLocation;

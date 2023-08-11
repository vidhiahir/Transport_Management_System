/* 
  This module is made for validation of the user credentials, it contains the function that returns the json object
  stating whether the entered details are correct or not.
*/

const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");
const GetUserName = require("./GetUserName");
const util = require("util");
const ValidateUser = (name, email, password) => {
  const connection = ConnectDB();
  console.log("done");
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        console.error("Error connecting to the database:", error);
        reject(error);
      } else {
        console.log("Connected to the database");
        let nm = "not defined";
        const nameQuery =
          "select user_name from user_table where user_email='" + email + "'";
        connection.query(nameQuery, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            nm = result[0].user_name;
          }
        });
        const validationQuery =
          "select count(*) as count from user_table where user_email='" +
          email +
          "' and user_password='" +
          password +
          "'";

        connection.query(validationQuery, (error, result) => {
          if (error) {
            console.error("Error executing the query:", error);
            reject(error);
          } else {
            if (result[0].count > 0) {
              console.log("registered");
              resolve({
                message: "Correct",
                status: 200,
                userName: nm,
              });
            } else {
              console.log("Wrong details");
              resolve({ message: "Wrong details", status: 401 });
            }
          }
        });
      }
    });
  });
  connection.end();
};

module.exports = ValidateUser;

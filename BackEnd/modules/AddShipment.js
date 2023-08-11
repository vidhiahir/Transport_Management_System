/*
product master too..
    body={
        shipperLocation:{
            state: '',
            country: '',
            postal code: ''
        },
        shipperName: '',
        consigneeName: '',
        recieverLocation:{
            state: '',
            country: '',
            postal code: ''
        },
        weight: ,
        carrier:'',
        mode of shipment: 'LTL or...',
        equipment: 'VAN, REFRIGERATED, FLAT Bed etc',
        Service level
        acc level (liftgate, appointment before del, overlength, non-commercial del, )
        Payment terms (prepaid, collect, 3rd party prepaid(default))
        if 3rd party then "Bill to " location also
        product class: 50 60 70 75.5 80 92 100 110 120 130 140 150
        stackable
        hazardous (with hazardous specialist details)
        PO no.
        SO no.
        Shipment value
        Special notes
        Select carrier from master table
        Freight cost manual for now
        (recent changes log (editted some fields))
        
    }

    new database:
    loadno as primary key,
    o_country,
    o_state,
    o_postal,
    r_country,
    r_state,
    r_postal


    json post req
    {
  "shipper_name": "ABC Company",
  "shipper_country": "United States",
  "shipper_state": "California",
  "shipper_postal": "90001",
  "consignee_name": "XYZ Corporation",
  "consignee_country": "United States",
  "consignee_state": "New York",
  "consignee_postal": "10001",
  "carrier_id": 1,
  "mode_of_shipment_id": 2,
  "equipment_id": 3,
  "weight": 500.0,
  "payment_terms_id": 1,
  "product_class": 2,
  "stackable": true,
  "hazardous": false,
  "hazardous_specialist_contact": "John Doe",
  "PO_no": "PO123",
  "SO_no": "SO456",
  "shipment_value": 10000.0,
  "special_notes": "Handle with care",
  "freight_cost": 500.0
}



*/

/*
  This module can be used to fetch the list object for the accesorials options available to the client.
*/

//table is shipment, payment_terms, equipments, mode_of_shipments, status

const mysql = require("mysql2");
const ConnectDB = require("./ConnectDB");

const util = require("util");
const { openSync } = require("fs");

const AddShipment = (props) => {
  // Assuming the props object contains the shipment data
  const {
    shipper_name,
    shipper_country,
    shipper_state,
    shipper_postal,
    consignee_name,
    consignee_country,
    consignee_state,
    consignee_postal,
    carrier_id,
    mode_of_shipment_id,
    equipment_id,
    weight,
    payment_terms_id,
    product_class,
    stackable,
    hazardous,
    hazardous_specialist_contact,
    PO_no,
    SO_no,
    shipment_value,
    special_notes,
    freight_cost,
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

        let input = [
          shipper_name,
          shipper_country,
          shipper_state,
          shipper_postal,
          consignee_name,
          consignee_country,
          consignee_state,
          consignee_postal,
          carrier_id,
          mode_of_shipment_id,
          equipment_id,
          weight,
          payment_terms_id,
          product_class,
          stackable,
          hazardous,
          hazardous_specialist_contact,
          PO_no,
          SO_no,
          shipment_value,
          special_notes,
          freight_cost,
          0,
        ];
        const Query =
          "CALL AddShipment( ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        connection.query(Query, input, (error, result) => {
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

module.exports = AddShipment;

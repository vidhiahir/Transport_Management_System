const express = require("express");
const app = express();
const cors = require("cors");
const util = require("util");
const ValidateUser = require("./modules/ValidateUser");
const FetchAccesorials = require("./modules/FetchAccesorials");
const FetchServiceLevels = require("./modules/FetchServiceLevels");
const FetchShipments = require("./modules/FetchShipments");
const GetCounts = require("./modules/GetCounts");
const FetchSavedLocations = require("./modules/FetchSavedLocations");
const AddNewLocation = require("./modules/AddNewLocation");
const AddShipment = require("./modules/AddShipment");
const GetUserName = require("./modules/GetUserName");
app.use(express.json());
app.use(cors());

// for handling login request
app.post("/login", cors(), async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await ValidateUser(name, email, password);
    res.json(result);
    console.log("success");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log("error");
  }
});

// for handling accesorials list request
app.post("/accessorials", cors(), async (req, res) => {
  try {
    const ans = await FetchAccesorials();
    console.log("success");
    res.json(ans);
  } catch (error) {
    res.json({ message: "error" });
  }
});

// for handling service level list request
// standard, guarenteed am, guarenteed pm, sport quoted
app.get("/serviceLevels", cors(), async (req, res) => {
  try {
    const ans = await FetchServiceLevels();
    console.log("success");
    res.json(ans);
  } catch (error) {
    res.json({ message: "error" });
  }
});

// for adding new shipment data to the master table
app.post("/addShipment", cors(), async (req, res) => {
  try {
    const ans = await AddShipment(req.body);
    console.log("success");
    res.json(ans);
  } catch (error) {
    res.json({ message: "error" });
  }
});

// for adding location details as saved location details in master table
app.post("/addLocation", cors(), async (req, res) => {
  try {
    const ans = await AddNewLocation(req.body);
    console.log("Success");
    res.json(ans);
  } catch (error) {
    res.json({ message: "error" });
  }
});

// for fetching shipments
app.get("/shipments", cors(), async (req, res) => {
  try {
    const ans = await FetchShipments();
    console.log("success");
    res.json(ans);
  } catch (error) {
    res.json({ message: "error" });
  }
});

// for fetching saved locations
app.get("/savedLocations", cors(), async (req, res) => {
  try {
    const ans = await FetchSavedLocations();
    console.log("success");
    res.json(ans);
  } catch (error) {
    res.json({ message: "error" });
  }
});

// for getting the counts of shipments like how many are booked, in transit, delivered, out for delivery, etc
app.get("/shipmentCounts", cors(), async (req, res) => {
  try {
    const ans = await GetCounts();
    console.log("counts given");
    res.json(ans);
  } catch (error) {
    res.json([]);
  }
});

app.post("/userDetails", cors(), async (req, res) => {
  try {
    const ans = await GetUserName(req.body);
    console.log(ans);
    console.log("it was name");
    res.json(ans);
  } catch (error) {
    res.json([]);
  }
});

const port = 3003;
app.listen(port, () => {
  console.log("Server running at", port, "port");
});

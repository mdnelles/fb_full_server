const express = require("express"),
   utils = express.Router(),
   cors = require("cors");

utils.use(cors());

let ip = "0.0.0.0";

utils.post("/ip", (req, res) => {
   
});

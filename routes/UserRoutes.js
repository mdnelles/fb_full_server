const express = require("express"),
   logs = express.Router(),
   cors = require("cors"),
   Logfn = require("../components/Logger"),
   rf = require("./RoutFuctions");

users.use(cors());

let ip = "0.0.0.0";
let tdate = Logfn.get_date();
let fileName = __filename.split(/[\\/]/).pop();

userss.post("/get_users", rf.verifyToken, (req, res) => {});

module.exports = users;

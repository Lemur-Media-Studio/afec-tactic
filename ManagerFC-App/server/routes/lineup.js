const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/lineup").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("lineup")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      //console.log(result);

    });
});

// This section will help you get a single record by id
recordRoutes.route("/lineup/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("lineup").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/lineup/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    surname: req.body.surname,
    p:req.body.p,
    d:req.body.d
  };
  db_connect.collection("lineup").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);

  });
});

// This section will help you update a record by id.
recordRoutes.route("/updateLineup/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      surname: req.body.surname,
      p:req.body.p,
      d:req.body.d

    },
  };
  db_connect
    .collection("lineup")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("lineup").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted " + req.params.id);
    response.json(obj);
  });
});

module.exports = recordRoutes;

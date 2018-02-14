const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const uriString = "mongodb://GreenJon:GreenJon1@ds221258.mlab.com:21258/algaedata2";

// connect
mongoose.connect(uriString);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Open Connection!");
});

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

const lakeSchema = mongoose.Schema({
  id: Number,
  lakeName: String,
  safetyLevel: String,
  buoys: [
    {
      buoyId: Number,
      buoyLocation: String,
      currentConditionCode: String,
      measurements: [
        {
          time: Date,
          salinity: Number,
          turbidity: Number,
          pH: Number
        }
      ]
    }
  ]
});

const lakeSchemaLog = mongoose.Schema({
  timeStamp: Date,
  requestInfo: String,
});

const Lake = mongoose.model('Lake', lakeSchema);
const LakeLogs = mongoose.model('logs', lakeSchemaLog);

router.get('/', (req, res) => {
  console.log('Base Page');
    // if (err) return console.log(err);
    console.log("Base Page");
    res.json("welcome home!");
});

// returns all lakes
router.get('/lakes', (req, res) => {
  console.log('Finding lakes!');
  Lake.find(function (err, lakes) {
    if (err) return console.log(err);
    res.json(lakes);

    const lakeLogData = new LakeLogs({
      timeStamp: Date.now(),
      requestInfo: lakes.toString(),
    });
    lakeLogData.save(function (err, lakeLogData) {
      if (err) return console.error(err);
    });
  });

});


// returns a certain lake
router.get('/lake/:lakeName', (req, res) => {
  var lakeName = req.params.lakeName;
  console.log("finding lake: ",lakeName);
  Lake.findOne({'lakeName': lakeName}, function(err, lake){
    if (err) return console.log(err);
    if (lake === null){
        var lakeErr = {"error" : "invalid lake"};
        console.log(lakeErr);
        res.status(400).json(lakeErr);
    } else {
      console.log(lake);
      res.json(lake);
    }
    const lakeLogData = new LakeLogs({
      timeStamp: Date.now(),
      requestInfo: lake.toString(),
    });
    lakeLogData.save(function (err, lakeLogData) {
      if (err) return console.error(err);
    });
  });
});

// returns json of attribute name at certain level
router.get('/safetyLevel/:code', (req, res) => {
  var colorCode = (req.params.code).toUpperCase();
  console.log('Finding all lakes of code: ', colorCode);
  Lake.find({'safetyLevel': colorCode}, function(err, codes){
    if (err) return console.log(err);
    if (codes.length === 0){
      var lakeErr = {"error" : "invalid color code"};
      console.log(lakeErr);
      res.status(400).json(lakeErr);
    } else {
      console.log(codes);
      res.json(codes);
    }
    const lakeLogData = new LakeLogs({
      timeStamp: Date.now(),
      requestInfo: colorCode.toString(),
    });
    lakeLogData.save(function (err, colorCode) {
      if (err) return console.error(err);
    });
  });
});

// handles malformed requests
router.get('/(:path/?)*', (req, res) => {
    var path = req.params.path;
    console.log("incorrect request path: ", path);
    var requestErr = {"error" : "invalid request path"};
    console.log(requestErr);
    res.status(400).json(requestErr);
});

module.exports = router;

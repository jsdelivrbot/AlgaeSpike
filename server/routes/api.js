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

const Lake = mongoose.model('Lake', lakeSchema);
Lake.where


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
    console.log(lakes.toString());
    res.json(lakes);
  });
});


// returns a certain lake
router.get('/lake/:lakeName', (req, res) => {
  var queryFind = req.params.lakeName;
  console.log("finding lake: ",queryFind);
  Lake.findOne({'lakeName': queryFind}, function(err, lake){
    if (err) return console.log(err);
    if (lake === null){
        var lakeErr = {"error" : "invalid lake"};
        console.log(lakeErr);
        res.json(lakeErr);
    } else {
      console.log(lake);
      res.json(lake);
    }
  });
});

// returns json of attribute name at certain level
router.get('/collection/:attriName/:value', (req, res) => {
  console.log('Finding lakes!');
  Lake.find(function (err, lakes) {
    if (err) return console.log(err);
    console.log(lakes.toString());
    res.json(lakes);
  });
});

module.exports = router;

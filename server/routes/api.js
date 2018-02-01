const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const uriString = "mongodb://GreenJon:GreenJon1@ds221258.mlab.com:21258/algaedata2";

// connect
mongoose.connect(uriString, {
  useMongoClient: true
});
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
  lakeName: String
});

const Lake = mongoose.model('Lake', lakeSchema);

router.get('/lakes', (req, res) => {
  console.log('Finding lakes!');
  Lake.find(function (err, lakes) {
    if (err) return console.log(err);
    console.log(lakes.toString());
  });
  return 0;
});

module.exports = router;

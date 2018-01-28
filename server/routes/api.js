// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const connectionURL = "mongodb://<GreenKay>:<GreenKay>@ds213338.mlab.com:13338/greenaglae";
// const algaeData = require('../models/algaeData');
//
//
// mongoose.Promise = global.Promise;
// mongoose.connect(connectionURL, function (err){
//   if (err){
//     console.log("error" + err);
//   }
// });
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function () {
//   console.log("Inside!");
// });
//
// router.get('/algaeData', function(req, res){
//   console.log("Get for all data:");
//   algaeData.find({})
//   .exec(function(err, algaeDataSets){
//     if (err){
//       console.log("Error getting algae data");
//     } else {
//       res.json(algaeData);
//     }
//   })
// });
//

const express = require('express');
const router = express.Router();
router.get('/', function (req, res) {
  res.send('api works');
});

module.exports = router;



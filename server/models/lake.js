var mongoose = require('mongoose');
var buoy = require('./buoy');
var Schema = mongoose.Schema;

var LakeSchema = new Schema(
  {
    id: {type: Number},
    lakeName: {type: String, required: true, max: 100},
    // buoys: {type: Array}
  }
);

//Export model
module.exports = mongoose.model('Lake', LakeSchema);

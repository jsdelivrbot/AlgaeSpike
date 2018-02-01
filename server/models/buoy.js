var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BuoySchema = new Schema(
  {
    buoyId: {type: Number},
    buoyLocation: {type: String},
    measurements: {type: {
      time: {type: Date},
      salinity: {type: Number},
      turbidity: {type: Number},
      pH: {type: Number}
    }}
  }
);

//Export model
module.exports = mongoose.model('Buoy', BuoySchema);

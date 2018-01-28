const mongoose  = require('mongoose');
const Schema = mongoose;

const algeaSchema = new Schema({
  mostDetected: {type: String},
  algaeDangerLevel: {type: String}
});

module.exports = mongoose.model('algaeData', algeaSchema, 'algaeData');

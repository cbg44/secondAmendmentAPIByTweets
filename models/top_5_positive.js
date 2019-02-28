const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const top_5_positiveSchema = new Schema({
   location:String,
    sentiment:String
});



const top_5_positive = mongoose.model('top_5_positive', top_5_positiveSchema);

module.exports = top_5_positive;
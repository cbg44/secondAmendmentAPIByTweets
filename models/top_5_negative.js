const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const top_5_negativeSchema = new Schema({
   location:String,
    sentiment:String,
});



const top_5_negative = mongoose.model('top_5_negative', top_5_negativeSchema);

module.exports = top_5_negative;
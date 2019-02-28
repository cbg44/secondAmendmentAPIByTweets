const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const view3Schema = new Schema({
    country:String,
    positive:String,
    neutral:String,
    against:String
});



const view3Schema_ = mongoose.model('view3', view3Schema);

module.exports = view3Schema_;
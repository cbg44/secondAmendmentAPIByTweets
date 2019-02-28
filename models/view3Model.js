const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const view_three_Schema = new Schema({
    country:String,
    positive:String,
    neutral:String,
    against:String
});



const View_three = mongoose.model('View_three', view_three_Schema);

module.exports = View_three;
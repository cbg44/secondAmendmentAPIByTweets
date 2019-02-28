const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const view_two_schema = new Schema({
    total_republicans:String,
    total_democrats:String,
    negative_democrates:String,
    negative_republicans:String
});



const View_two = mongoose.model('View_two', view_two_schema);

module.exports = View_two;
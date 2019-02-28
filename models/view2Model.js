const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const view2Schema = new Schema({
    total_republicans:String,
    total_democrats:String,
    negative_democrates:String,
    negative_republicans:String
});



const view2Schema_ = mongoose.model('view2', view2Schema);

module.exports = view2Schema_;
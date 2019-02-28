const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countries_format_nameSchema = new Schema({
   short_name:String,
    name:String,
    db_name:String
});



const countries_format_name = mongoose.model('countries_format_name', countries_format_nameSchema);

module.exports = countries_format_name;
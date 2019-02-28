let countries_format_names = require('../models/countries_format_namesModel');


exports.countries_format_names = async function(){
    return countries_format_names.find()
        .catch(() => error("err"));
};
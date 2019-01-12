let Country = require('./../models/countryModel');


exports.getTweetCountry = async function(){
    return Country.find()
        .catch(() => error("err"));
};
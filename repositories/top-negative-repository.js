let top_5_negative = require('./../models/top_5_negative');


exports.getTweetTop_5_negative = async function(){
    return top_5_negative.find()
        .catch(() => error("err"));
};
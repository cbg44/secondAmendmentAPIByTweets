let top_5_positive = require('./../models/top_5_positive');


exports.getTweetTop_5_positive = async function(){
    return top_5_positive.find()
        .catch((e) => error(e));
};
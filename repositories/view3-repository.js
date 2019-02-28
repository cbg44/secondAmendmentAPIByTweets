let view3_ = require('../models/view3Model');


exports.view3 = async function(){
    return view3_.find()
        .catch(() => error("err"));
};
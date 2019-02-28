let view2_ = require('../models/view2Model');


exports.view2 = async function(){
    return view2_.find()
        .catch(() => error("err"));
};
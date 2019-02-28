let view2_ = require('../repositories/view2-repository');

exports.View2 = class {

    constructor() {
    }


    async view2_service(){
        try{
            let view2 = await view2_.view2();
            return view2;
        }catch(err){
            console.log(err);
        }
    }

};
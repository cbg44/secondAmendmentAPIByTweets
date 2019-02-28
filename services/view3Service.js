let view3_ = require('../repositories/view3-repository');

exports.View3 = class {

    constructor() {
    }


    async view3_service(){
        try{
            let view3 = await view3_.view3();
            return view3;
        }catch(err){
            console.log(err);
        }
    }

};
let negativeRepo = require('../repositories/top-negative-repository');

exports.NegativeService = class {

    constructor() {
    }


    async getNegativeTweets(){
        try{
            let negativeTopFive = await negativeRepo.getTweetTop_5_negative();
            return negativeTopFive;
        }catch(err){
            console.log(err);
        }
    }

};
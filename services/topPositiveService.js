let positiveRepo = require('../repositories/top-positive-repository');

exports.PositiveService = class {

    constructor() {
    }


    async getPositiveTweets(){
        try{
            let positiveTopFive = await positiveRepo.getTweetTop_5_positive();
            return positiveTopFive;
        }catch(err){
            console.log(err);
        }
    }

};
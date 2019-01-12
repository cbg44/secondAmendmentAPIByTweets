let countriesRepository = require('../repositories/countries-repository');

exports.CountryService = class {

    constructor() {
    }


    async getCountries(){
        try{
            let countries = await countriesRepository.getTweetCountry();
            return countries;
        }catch(err){
            console.log(err);
        }
    }

};
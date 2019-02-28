let countries_format_names = require('../repositories/countries_format_names-repository');

exports.GeneralService = class {

    constructor() {
    }


    async getCountries_format_names_(){
        try{
            let countries_format_names_ = await countries_format_names.countries_format_names();
            return countries_format_names_;
        }catch(err){
            console.log(err);
        }
    }

};
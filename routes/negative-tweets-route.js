let express = require('express');
let router = express.Router();
let negativeService = new (require('../services/topNegativeService')).NegativeService();

router.use(function(req, res, next) {
    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

    // Request methods you  wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,authorization,Accept');

    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        log.info('end options');
        return res.status(200).send();
    }
    next();
});


router.get('/', async function(req, res, next) {
    try {
        let negativeList = await negativeService.getNegativeTweets();
        res.send(negativeList);
    } catch (err) {
        console.log(err);
        next(err);
    }
});

module.exports = router;
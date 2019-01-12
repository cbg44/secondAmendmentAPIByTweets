const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose').set('debug', true);
const keys = require('./config/keys');
const tweets = require('./routes/tweets-route');
const countries = require('./routes/countries-route');
bodyParser = require('body-parser');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));


mongoose.Promise = global.Promise;

// connect to mongodb
mongoose.connection.openUri(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');

});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/getAllTweets', tweets);
app.use('/getAllCountries', countries);


app.listen(process.env.PORT || 3000, () => {
    console.log('app now listening for requests on port 3030');
});

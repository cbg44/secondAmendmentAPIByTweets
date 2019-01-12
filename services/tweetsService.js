let tweetsRepository = require('../repositories/tweets-repository');
let _ = require('lodash');
const request = require('request');
const axios = require('axios');
const token = 'ee4117c6dde94aa4b69ba21790f1a48a';

exports.TweetService = class {

    constructor() {
    }




     async ApiGetSetiment (tweetId, token, text){
        try {
            let tweet =  await axios.get(`https://api.dandelion.eu/datatxt/sent/v1?token=${token}&text=${text}`);
             let updatedTweet = await tweetsRepository.findTweetAndUpdateSentiment(tweetId, tweet.data.sentiment.type);
             return updatedTweet;
        } catch (error) {
            console.error(error)
        }
    }


    async getTweets(){
        let allTweetsList = await tweetsRepository.getAllTweets();
       // let tempArray = allTweetsList.slice(1000,1350);

        return allTweetsList;
    }



   /*    async getSentiment(allTweetsList) {
        //   let tweetWithSentiment = _.map(allTweetsList[9], tweet => {
        //    let text = tweet.text;
        let text = allTweetsList[9].text;
        axios.get(`https://api.dandelion.eu/datatxt/sent/v1?token=${token}&text=${text}`)
            .then(response => {
                console.log(response.sentiment.type);
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            });
        /!*let req =  request(`https://api.dandelion.eu/datatxt/sent/v1?token=${token}&text=${text}`, { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.url);
            console.log(body.explanation);
        });
        // tweet.sentiment = sentimentResult.sentiment.type
    });*!/


    }
*/
};
let tweetsRepository = require('../repositories/tweets-repository');
let _ = require('lodash');
const axios = require('axios');
const token = 'f5a6cd55f70f4fc1b49b4a52ea527d67';

exports.TweetService = class {

    constructor() {
    }


    async ApiGetSentiment(tweetId, token, text) {
        try {
            let tweet = await axios.get(`https://api.dandelion.eu/datatxt/sent/v1?token=${token}&text=${text}`);
            let updatedTweet = await tweetsRepository.findTweetAndUpdateSentiment(tweetId, tweet.data.sentiment.type);
            return updatedTweet;
        } catch (error) {
            console.error(error)
        }
    }


    async getTweets() {
        let allTweetsList = await tweetsRepository.getAllTweets();
       /* let res = _.map(allTweetsList, tweet => {
            if (_.has(tweet, '_doc.sentiment') === false) {
                return this.ApiGetSentiment(tweet._id, token, tweet.text);
            }
        });*/
        return allTweetsList;
    }


};
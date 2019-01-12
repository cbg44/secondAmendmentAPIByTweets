let Tweet = require('./../models/tweetsModel');

exports.getAllTweets = async function () {
    return Tweet.find()
        .catch(() => error("err"));
};


exports.findTweetAndUpdateSentiment = async function(tweetId, sentiment){
      Tweet.findByIdAndUpdate(tweetId, {$set: {sentiment: sentiment}}, {new:true}, function(err, tank) {
         if (err) console.log(err);
     })
};


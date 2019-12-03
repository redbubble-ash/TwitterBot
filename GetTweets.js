var Twit = require('twit'); // this is how we import the twit package
var config = require('./config') //this is we import the config file which is a js file which contains the keys ans tokens
var T = new Twit(config); //this is the object of twit which will help us to call functions inside it
const fs = require("fs");

//Twit package function that gets the latest number of tweets asked for from the T.get function.
function searchedData(err, data, response) {
    // Filter out any of the results that are retweets
    var newdata = data.filter(
        element => element.full_text.substring(0, 2) !== "RT"
    );

    //Create Map object of the two useful fields
    newdata = newdata.map(function (element) {
        var item = {
            input: element.full_text,
            output: element.user.name
        };
        if (currentUser !== element.user.screen_name) {
            currentUser = element.user.screen_name;
        }

        if (item !== null) return item;

    });

    //Convert to JSON and save it to a file named {TwitterUserName}.json
    let result = JSON.stringify(newdata);
    fs.writeFileSync(`${currentUser}.json`, result);
}

//Wraps the T.get function so that it can easily be called for anyone you wish to get the latest tweets of.
function GetUserTweets(screenName, count) {
    T.get('statuses/user_timeline', { screen_name: screenName, tweet_mode: 'extended', count: count }, searchedData);
}

let currentUser;
GetUserTweets('realDonaldTrump', 50);
GetUserTweets('BarackObama', 50);
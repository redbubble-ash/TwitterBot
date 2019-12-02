var Twit = require('twit'); // this is how we import the twit package
var config = require('./config') //this is we import the config file which is a js file which contains the keys ans tokens
var T = new Twit(config); //this is the object of twit which will help us to call functions inside it
// let newdata;
var result;
var param1 = {
screenName: 'realDonaldTrump',
count: 1
} // this is the param variable which will have key and value ,the key is the keyword which we are interested in searching and count is the count of it
T.get('statuses/user_timeline', {screen_name: param1.screenName, tweet_mode:'extended'},searchedData); // get is the function to search the tweet which three paramaters 'search/tweets',params and a callback function.
const fs = require("fs");




const item = {
    input: "lalalaa",
    output: "haha"
}

function searchedData(err, data, response) {
    let newdata = data.map(function(element) {
        if(element.user.screen_name=="realDonaldTrump"  && element.full_text.substring(0,2)!= "RT"){
            
            var item = {
                input: element.full_text,
                output: "donald trump"
            }
            
            if(item !== null) return item;

        }
    });

    // // console.log(typeof newdata);
    

    const test = newdata.concat(item);
    result = JSON.stringify(test);
    fs.writeFileSync("trump_tweets.json", result);


   
}


// searchedData function is a callback function which returns the data when we make a search





var Twit = require('twit'); // this is how we import the twit package
var config = require('./config') //this is we import the config file which is a js file which contains the keys ans tokens
var T = new Twit(config); //this is the object of twit which will help us to call functions inside it
var params = {
screenName: 'realDonaldTrump',
count: 1
} // this is the param variable which will have key and value ,the key is the keyword which we are interested in searching and count is the count of it
T.get('statuses/user_timeline', {screen_name: params.screenName},searchedData); // get is the function to search the tweet which three paramaters 'search/tweets',params and a callback function.
function searchedData(err, data, response) {
console.log(data);

} // searchedData function is a callback function which returns the data when we make a search
const brain = require("brain.js");
const fs = require("fs");

const trumpdata =require('./trump_tweets.json');
const obamadata = require('./obama_tweets.json');
const data = trumpdata.concat(obamadata);
// console.log(data);

var learnt = null;
try {
  learnt = require("./trained_net.json");
} catch (err) {
  console.log("New learning starts.");
}

const network = new brain.recurrent.LSTM();


if (learnt != null) {
    network.fromJSON(learnt);
  } 
  else {

    const trainingData = data.map(item =>({
        input: item.input,
        output: item.output
    }));
    
    network.train(trainingData,{
        iterations: 100
    });
  
    var run = JSON.stringify(network.toJSON());
    fs.writeFileSync("trained_net.json", run);
  }
  

const output = network.run("when america is united, america is totally unstoppable.");
console.log(`User: ${output}`);
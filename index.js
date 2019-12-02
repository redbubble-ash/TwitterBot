const brain = require("brain.js");
const fs = require("fs");

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
        input: item.text,
        output: item.category
    }));
    
    network.train(trainingData,{
        iterations: 20
    });
  
    var run = JSON.stringify(network.toJSON());
    fs.writeFileSync("trained_net.json", run);
  }
  

const output = network.run('I fixed the power supply');

console.log(`Category: ${output}`);
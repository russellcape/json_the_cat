const request = require("request")

request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

const fs = require('fs');

fs.writeFile("breedFetcher.js", "Hey there!", function(err) {
  if(err) {
    return console.log(err);
    }
    console.log("The file was saved!");
}); 
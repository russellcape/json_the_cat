const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    if (error) {
      callback(`Failed to request details: ${error}`, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`Failed to find breed ${breedName}`, null);
    } else {
      const desc = data[0].description;
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };
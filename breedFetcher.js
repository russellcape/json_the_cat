const request = require('request');



const fetchBreedDescription = function(breedName) {
  breedName = process.argv[2];
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    if (error) {
      console.log(`Failed to request details: ${error}`);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Failed to find breed ${breedName}`);
    } else {
      const desc = data[0].description;
      console.log(desc);
    }
  });
};

fetchBreedDescription();
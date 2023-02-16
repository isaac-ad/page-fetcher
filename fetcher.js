const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log("Error fetching resource!");
    return;
  }

  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.log("Error writing file!");
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});

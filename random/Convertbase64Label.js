const fs = require("fs");

const base64Data = ''

fs.writeFile('label.png', base64Data, 'base64', function(err) {
    console.log('Label file returned!');
    console.log(err);
  });
const https = require('https');
const fs = require('fs');
const url = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js';
const file = fs.createWriteStream("jspdf.umd.min.js");

https.get(url, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close();
    console.log("Download complete: " + fs.statSync("jspdf.umd.min.js").size + " bytes");
  });
}).on('error', function(err) {
  fs.unlink("jspdf.umd.min.js", () => {});
  console.error("Error: ", err.message);
});

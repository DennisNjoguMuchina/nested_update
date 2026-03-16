const https = require('https');
const fs = require('fs');
const url = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
const file = fs.createWriteStream("html2pdf.bundle.min.js");

https.get(url, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close();
    console.log("Download complete: " + fs.statSync("html2pdf.bundle.min.js").size + " bytes");
  });
}).on('error', function(err) {
  fs.unlink("html2pdf.bundle.min.js", () => {});
  console.error("Error: ", err.message);
});

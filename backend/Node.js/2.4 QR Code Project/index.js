/* 
/1. Use the inquirer npm package to get user input.*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "type your URL here:",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;    
    //console.log(url);
    /*2. Use the qr-image npm package to turn the user entered URL into a QR code image. traduce al español que se debe descargar el qr-image npm package para convertir la URL ingresada por el usuario en una imagen de código QR.
    var qr = require('qr-image');*/
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    /*3. Create a txt file to save the user input using the native fs node module.*/
    fs.writeFile('URL1.txt', url, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



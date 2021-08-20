const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is your location?',
      },
    {
      type: 'checkbox',
      message: 'What do you like to do?',
      name: 'activity',
      choices: ['running', 'hiking', 'swimming', 'skiing', 'biking'],
    },
    {
      type: 'input',
      name: 'linkedIn',
      message: 'What is your LinkedIn URL?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub profile name?',
      },
  ])
  .then((data) => {
      console.log("data: ", data);
    const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;

    const { name, location, activity, linkedIn, gitHub} = data;
    let htmlContent = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>${name}</h1>
            <h2>${location}</h2>
            <h2>${activity}</h2>
            <a href="${linkedIn}" target="_blank">linkedIn</a>
            <a href="${gitHub}" target="_blank">gitHub</a>
        </body>
        </html>`;

    fs.writeFile(filename, htmlContent, (error) => { /* handle error */ });
  })
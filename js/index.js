// TODO: Include packages needed for this application
const fs = require(`fs`);
const colors = require(`colors`);
const inquirer = require(`inquirer`);
const { error } = require("console");

const {generateMarkdown} = require(`./generateMarkdown`);

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the project description:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the project installation requirements:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:'
        },
        {
            type: `list`,
            name: 'license',
            message: `Select the licence you want to use:`,
            choices: [`Apache`, `Boost`, `GNU AGPLv3`, `GNU GPLv3`, `GNU LGPLv3`, `MIT`, `The Unlicense`, `N/A`]
        },
        {
            type: `input`,
            name: `howToContribute`,
            message: `Explain how to contribute to this project:`
        },
        {
            type: `input`,
            name: `tests`,
            message: `Write tests for this application:`
        },
        {
            type: `input`,
            name: `username`,
            message: `Enter your GitHub username:`
        },
        {
            type: `input`,
            name: `email`,
            message: `Enter your email username:`
        }



    ])

    .then((responses) => {
    const myReadmeContent = generateMarkdown(responses);
    writeToFile(myReadmeContent);
    });
    

// // TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data, (error) => error? console.log(`something bad happened`) : console.log(`written!!!`));
}

// fs.writeFile(`${responses.title}.md`, data, (error) => error? console.log(`something bad happened`) : console.log(`written!!!`));


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

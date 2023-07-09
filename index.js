// allows inquirer and fs to be used in this app
const inquirer = require('inquirer');
const fs = require('fs');
// allows the path method to be used and the secondary js
const path = require('path');
const generateMarkdown = require('./utilis/generateMarkdown');


// Array that conatains all of my questions for the readme
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Name of your project: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project: '
    },
    {
        type: 'input',
        name: 'Table of contents',
        message: 'Provide a table of contents if applicable'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation guide'
    },
    {
        type: 'input',
        name: 'use',
        message: 'Usage: '
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose your license',
        choices: [
            "MIT License",
            "none",
          ],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Other contibutors: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests done: '
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Where to ask questions: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
];

// this function writes the readme.md based upon the responses from the user
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// this initializes the application. I have left the catch(err) in
// only because it was a good learning tool. Adding that in broke the code 
// so that it would not allow for user input in the CLI
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        console.log('Create your README!');
        writeToFile('README.md', generateMarkdown({ ...responses}));
    })
//     .catch (err); {
//         console.log(err);
//     }
    }

// Function call to initialize app
init();

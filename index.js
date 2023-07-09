// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const path = require('path');
const README = require('./utilis/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'title',
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
        name: 'Install',
        message: 'Installation guide'
    },
    {
        type: 'input',
        name: 'Use',
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
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        console.log('Create your README!');
        writeToFile('README.md', )
    })
}

// Function call to initialize app
init();

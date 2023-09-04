// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project title',
        message: 'Please enter the project title',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instruction',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Please provide contribution guidelines',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Please provide test instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        options: ['MIT', 'Apache', 'GPL', 'BSD', 'MPL', 'EPL', 'Creative Commons']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide email address',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        err ? console.log(err) : console.log('README file written.');
    });
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    })
 }

// Function call to initialize app
init();

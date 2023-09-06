// This imports packages and modules
const inquirer = require('inquirer'); // for interactive command-line prompts
const fs = require('fs'); // for file system operations
const generateMarkdown = require('./utils/generateMarkdown'); // import the markdown generator function

// This declares a list of questions used for user prompts.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the project title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide the description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instruction: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information: ',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines: ',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 2', 'BSD 3', 'MPL 2.0', 'EPL 2.0', 'Creative Commons', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide github username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide email address: ',
    },
];

// This function writes content to a file, taking parameters for the file name and data to write to the fie.
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        err ? console.log(err) : console.log('README file written.');
    });
}

// This function initializes the application by prompting user with questions, as well as generatating and writing the README file.
function init() {
    // Uses inquirer to prompt user with questions
    inquirer.prompt(questions)
        .then((answers) => {
            // Generates markdown content for README
            const readmeContent = generateMarkdown(answers);
            // Writes the content to a README.md file
            writeToFile('README.md', readmeContent);
        })
}

// Call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guidelines:'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use?',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

  
//Create a function to write README file

const fs = require('fs');

function generateReadme(answers) {
  const { title, description, installation, usage, contribution, test, license, username, email } = answers;

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  const readmeContent = `
# ${title}
${licenseBadge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Tests
${test}


${licenseSection}

## Questions
If you have any questions or would like to contribute to this project, you can find me on GitHub: https://github.com/${username}, or contact me directly at ${email}.
  `;

  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated!');
    }
  });
}




// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      generateReadme(answers);
    })
    .catch((error) => {
      console.log(error);
    });
}


// Function call to initialize app
init();

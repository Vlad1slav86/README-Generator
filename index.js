// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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

  
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

const fs = require('fs');

function generateReadme(answers) {
  const { title, usage, screenshot, credits, license, github, link } = answers;

  const readmeContent = `
# ${title}

## Description

Add a description of your project here.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

Add installation instructions here.

## Usage

${usage}

![${title} Screenshot](${screenshot})

## Credits

${credits}

## License

${license}

## Questions

Find me on GitHub: [${github}](https://github.com/${github})

Live app: [${link}](${link})
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

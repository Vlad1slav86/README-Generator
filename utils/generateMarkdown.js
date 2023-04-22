//Create a function that returns a license badge based on which license is selected
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license.toLowerCase()) {
    case 'mit':
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'apache 2.0':
      return '![Apache License, Version 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'gpl 3.0':
      return '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'bsd 3-clause':
      return '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

//Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license.toLowerCase()) {
    case 'mit':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'apache 2.0':
      return '[Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'gpl 3.0':
      return '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    case 'bsd 3-clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

//Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
## License

This project is licensed under the ${renderLicenseLink(license)} license. See the [LICENSE](./LICENSE) file for details.
`;
}

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution Guidelines

${data.contribution}

## Tests

${data.test}

${renderLicenseSection(data.license)}

## Questions

If you have any questions about this project, please feel free to contact me through my [GitHub profile](https://github.com/${data.username}) or via email at ${data.email}.
`;
}

// Export functions
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};
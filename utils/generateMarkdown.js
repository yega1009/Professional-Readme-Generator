// This function generates a license badge based on the license provided.
function renderLicenseBadge(license) {
  switch (license) {
    // It uses different cases based on license type to return the appropriate badge.
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'BSD 2':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'MPL 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'EPL':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'Creative Commons':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    default:
      return '';
  }
}

// This function generates a link for the license based on the license provided.
function renderLicenseLink(license) {
  switch (license) {
    // It uses different cases based on license type to return the appropriate link
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 2':
      return 'https://opensource.org/licenses/BSD-2-Clause';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'MPL 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'EPL 2.0':
      return 'https://www.eclipse.org/legal/epl-2.0/';
    case 'Creative Commons':
      return 'https://creativecommons.org/licenses/';
    default:
      return '';
  }
}

// This function generates the license section for a README.
function renderLicenseSection(license) {
  // If no license is provided or license is set to 'None', this function returns an empty string
  if (!license || license === 'None') return '';
  return `## License 
  This project is covered under the [${license}](${renderLicenseLink(license)}) license.
  `;
}

// This function generates markdown formatted content for a README.
function generateMarkdown(data) {
  // The template for README.md with placeholders are replaced by user's data inputs
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions, please reach out to me at the following:

- [GitHub Profile](https://github.com/${data.github})
- Email: ${data.email}
`;
}

// This exports the function
module.exports = generateMarkdown;

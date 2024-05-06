// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case `Apache`:
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    
    case `Boost`:
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

    case `GNU AGPLv3`:
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;

    case `GNU GPLv3`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

    case `GNU LGPLv3`:
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    
    case `MIT`:
      return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      `;

    case `Mozilla`:
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

    case `The Unlicense`:
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;

    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case `Apache`:
      return `(https://opensource.org/licenses/Apache-2.0)`;
    
    case `Boost`:
      return `(https://www.boost.org/LICENSE_1_0.txt)`;

    case `GNU AGPLv3`:
      return `(https://www.gnu.org/licenses/agpl-3.0)`;

    case `GNU GPLv3`:
      return `(https://www.gnu.org/licenses/gpl-3.0)`;

    case `GNU LGPLv3`:
      return `(https://www.gnu.org/licenses/lgpl-3.0)`;
    
    case `MIT`:
      return`(https://opensource.org/licenses/MIT)`;
      
    case `Mozilla`:
      return `(https://opensource.org/licenses/MPL-2.0)`;

    case `The Unlicense`:
      return `(http://unlicense.org/)`;

    case `N/A`:
      return ``;

    default:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const licenseLink = renderLicenseLink(license);

  if(license !== `N/A`) {
    return `
  ## License
  This application is covered under the **${license} License**.
  
  More information here: ${licenseLink}`
  }

  else  {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  ${licenseBadge}
# ${data.title}

## Project Description
${data.description}

## Table of Content:
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## How To Contribute
${data.howToContribute}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = {generateMarkdown};


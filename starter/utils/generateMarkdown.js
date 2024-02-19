// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach out to me via [GitHub](https://github.com/${data.githubUsername}) or email at ${data.email}.
`;
}

module.exports = generateMarkdown;

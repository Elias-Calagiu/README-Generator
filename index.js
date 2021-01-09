const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require("");
// Psuedo Codez
// TODO: create a prompt of inquirer Q's
inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your application?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your application',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Enter application usage information',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'Detail contribution guidelines here',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Detail test instructions',
            name: 'Tests',
        },
        {
            type: 'list',
            message: 'Choose your license!',
            name: 'License',
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "No license"],
        },
        {
            type: 'input',
            message: 'Enter GitHub Link',
            name: 'GitHub',
        },
        {
            type: 'input',
            message: 'Enter email address',
            name: 'Email',
        },
    ])
    .then((response) => {
      const mdOutput =  `# Professional README Generator

## Application Title
    * ${response.title}
## Description
    * ${response.Description}
## Installation
    * ${response.Installation}
## Usage
    * ${response.Usage}
## Contributing
    * ${response.Contributing}
## Tests
    * ${response.Tests}
## License
    * ${response.License}
## Github Link
     (${response.GitHub})
## Email
    * ${response.Email}
---`
        fs.writeFile(`README.md`, mdOutput, err => {
            if (err) {
                console.log(err);
            } else {
                console.log("well done jabrone")
            }
        })

    })


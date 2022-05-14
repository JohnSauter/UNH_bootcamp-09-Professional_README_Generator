/* Professional README Generator */

// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const generate_markdown = require ("./utils/generateMarkdown.js");
const fs = require ("fs");

// TODO: Create an array of questions for user input
// Ask about title, description, installation instructions,
// usage information, contribution guidelines, and test
// instructions.  Also ask about license, github username,
// and e-mail address.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        default: "nameless",
        when: true
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project.",
        default: "",
        when: true
    },
    {
        type: "input",
        name: "installation",
        message: "What must a user do to install your project?",
        default: "",
        when: true
    },
    {
        type: "input",
        name: "usage",
        message: "How would someone use your project?",
        default: "",
        when: true
    },
    {
        type: "input",
        name: "contribute",
        message: "How can a user contribute to your project?",
        default: "",
        when: true
    },
    {
        type: "input",
        name: "test",
        message: "How can a user test your project?",
        default: "",
        when: true
    },
    {
        type: "input",
        name: "features",
        message: "What special features does your project have?",
        default: "",
        when: true
    },
    {
        type: "list",
        name: "license",
        message: "How would you like to license your project?",
        default: "GNU AGPL-3.0",
        choices: ["GNU AGPLv3", "GNU GPLv3", 
            "Apache 2.0", 
            "Creative Commons Attribution-ShareAlike 4.0 International",
            "Creative Commons CC0 1.0", "ISC"
        ],
        when: true
    },
    {
        type: "input",
        name: "github_user_name",
        message: "What is your GitHub user name?",
        default: "",
        when: true
    },
    {
        type: "input",
        name: "e-mail_address",
        message: "What is your e-mail address?",
        default: "",
        when: true
    },
    {
        type: "input",
        name: "result_file_name",
        message: "What name would you like for the README file?",
        default: "NEWREADME.md",
        when: true
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (fileName) {
        fs.writeFile(fileName, data, err => file_write_complete (err));
    } else {
        file_write_complete ("no file name specified");
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => 
        process_answers(answers))};

/* Function to process the answers.  Use Mustache to populate
 * a template.  */
function process_answers (answers) {
    const result = generate_markdown (answers);
    writeToFile(answers.result_file_name, result);
}

/* Function to handle completion of the write of README.md  */
function file_write_complete (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File write complete.");
    }
}

// Function call to initialize app
init();


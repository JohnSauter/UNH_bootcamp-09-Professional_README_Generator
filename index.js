/* Professional README Generator */

// TODO: Include packages needed for this application
inquirer = require ("inquirer");

// TODO: Create an array of questions for user input
// Ask about title, description, installation instructions,
// usage information, contribution guidelines, and test
// instructions.  Also ask about license, github username,
// end -mail address.
const questions = [
    {
        type: "input",
        name: "answer_01",
        message: "Question 1?",
        default: "",
        when: true
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    let prompt = inquirer.createPromptModule();
    prompt(questions).then(answers => {
        console.log(answers)});
}

// Function call to initialize app
init();


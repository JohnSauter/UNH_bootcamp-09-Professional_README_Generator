/* Professional README Generator */

// Include the packages needed for this application.
import inquirer from 'inquirer';
import generate_markdown from './utils/generateMarkdown.js';
//const generate_markdown = require("./utils/generateMarkdown.js");
import fs from "fs";
//const fs = require("fs");

/* The help_text object contains help text for the various questions.
 * The property is the "name" of the question and its value is the
 * help text for that value.  */
const help_text = {
    title: "The name of your project distinguishes it from other projects.\n" +
        "Choose a name which will be found by someone who is searching for a project\n" +
        "that that does what your project does.",
    description: "Provide a short description explaining the what, why, and how of your project.\n" +
        "Use the following questions as a guide:\n" +
        "  - What was your motivation?\n" +
        "  - Why did you build this project?\n" +
        "      (Note: the answer is not \"Because it was a homework assignment.\")\n" +
        "  - What problem does it solve?\n" +
        "  - What did you learn?\n",
    installation: "What are the steps required to install your project?\n" +
        " Provide a step-by-step description of how to get the development environment running.",
    usage: "Provide instructions and examples for use. Include screenshots as needed.\n" +
        " To add a screenshot, create an `assets/images` folder in your repository\n" +
        " and upload your screenshot to it. Then, using the relative filepath,\n" +
        " add it to your README using the following syntax:\n" +
        "   ![alt text](assets/images/screenshot.png)",
    collaborators: "List your collaborators, if any, with links to their GitHub profiles.\n" +
        " If you used any third-party assets that require attribution,\n" +
        " list the creators with links to their primary web presence in this section.\n" +
        " If you followed tutorials, include links to those here as well.",
    contribute: "If you created an application or package and would like\n" +
        " other developers to contribute it, you can include guidelines for how to do so.\n" +
        " The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard,\n" +
        " but you can always write your own if you'd prefer.",
    test: "Go the extra mile and write tests for your application,\n" +
        " Then provide examples on how to run them here.\n" +
        " A GitHub profile with consistently high-quality README files\n" +
        " is sure to help you stand out among the crowd of developers putting their work on GitHub,\n" +
        " so make sure you give these important files the time and attention they deserve.",
    badges: "Badges aren't necessary, per se, but they demonstrate street cred.\n" +
        " Badges let other developers know that you know what you're doing.\n" +
        " Check out the badges hosted by [shields.io](https://shields.io/).\n" +
        " You may not understand what they all represent now, but you will in time.",
    features: "If your project has a lot of features, list them here.",
    license: "An important section of a high-quality README file is the license.\n" +
        " This lets other developers know what they can and cannot do with your project.\n" +
        " If you need help choosing a license, refer to\n" +
        " [https://choosealicense.com/](https://choosealicense.com/).",
    github_user_name: "Provide your gitHub user name if you want people to see your\n" +
        " other projects on GitHub.",
    e_mail_address: "Provide your e-mail address if you want people with questions about\n" +
        " your project to contact you using e-mail.",
    result_file_name: "Write the resulting README file here.  You can edit it after it\n" +
        " has been written using any text editor.  Editing the file will make sections with lots\n" +
        " of text easier to enter.\n" +
        " If you do not provide a name, no file will be written."
}
const suffix = "Type ? for help.";

/* Create an array of questions for user input
 * Ask about title, description, installation instructions,
 * usage information, contribution guidelines, and test
 * instructions.  Also ask about license, github username,
 * and e-mail address.  Finally, ask for the file name
 * for the README file.  We don't want to just write
 * README.md because there might be a good README file
 * there for some other project. */
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.title;
            }
            if (response == "") {
                return "You must provide a name for your project";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project.  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.description;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What must a user do to install your project?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.installation;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "How would someone use your project?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.usage;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "collaborators",
        message: "Who did you work with, and what resources did you use?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.collaborators;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "contribute",
        message: "How can a user contribute to your project?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.contribute;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "How can a user test your project?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.test;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "features",
        message: "What special features does your project have?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.features;
            } else {
                return true;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "How would you like to license your project?\n" + help_text.license,
        default: "GNU AGPLv3",
        choices: ["GNU AGPLv3", "GNU GPLv3",
            "Apache 2.0",
            "Creative Commons Attribution-ShareAlike 4.0 International",
            "Creative Commons CC0 1.0", "ISC"
        ],
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.license;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "github_user_name",
        message: "What is your GitHub user name?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.github_user_name;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "e_mail_address",
        message: "What is your e-mail address?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.e_mail_address;
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "result_file_name",
        message: "What name would you like for the README file?  " + suffix,
        default: "",
        when: true,
        validate: function (response) {
            if (response == "?") {
                return help_text.result_file_name;
            } else {
                return true;
            }
        }
    }
];

// Create a function to write README file if a file name was specified.
function writeToFile(fileName, data) {
    if (fileName) {
        fs.writeFile(fileName, data, err => file_write_complete(err));
    } else {
        file_write_complete("No file name specified so no file written.");
    }
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>
        process_answers(answers))
};

/* Function to process the answers.    Call generate_markdown
 * to do the work, then write out the file.  */
function process_answers(answers) {
    const result = generate_markdown(answers);
    writeToFile(answers.result_file_name, result);
}

/* Function to handle completion of the write of README.md  */
function file_write_complete(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File write complete.");
    }
}

// Function call to initialize app
init();


import Mustache from "mustache";
import fs from "fs";
//const Mustache = require ("mustache");
//const fs = require ("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result = "";
  switch (license) {
  case "Apache 2.0":
    result = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
  case "Creative Commons Attribution-ShareAlike 4.0 International":
    result = "[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)";
    break;
  case "Creative Commons CC0 1.0":
    result = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    break;
  case "GNU GPLv3":
    result = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
  case "GNU AGPLv3":
    result = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    break;
  case "ISC":
    result = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    break;
  default:
      result = "";
      break;
  }
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
/* Not needed because the badge contains the link.  */
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
/* Not needed because we are substituting the badge directly into
 * the README.md file.  */
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  /* Create a key for the license badge. */
  const license_badge = renderLicenseBadge(data.license);
  data["license_badge"] = license_badge;

  /* Read the template from the file system.  Keeping the template
   * in a separate file makes it easier to modify.  */
  const template = fs.readFileSync("./assets/template.md", "utf-8");

  /* Use Mustache to edit the answers into the template.  */
  const result = Mustache.render (template, data);
  return result;
};

//module.exports = generateMarkdown;
export default generateMarkdown;

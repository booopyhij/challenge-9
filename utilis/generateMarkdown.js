// This allows for the license badge to be added to the readme
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `(https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
  } else {
    return '';
  }
}

// this function links the license to the readme
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [license](#license)\n`;
  } else {
    return '';
  }
}

// This function allows the license to be appended
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return '## License: Licensed under' + license + 'License';
  } else {
    return '';
  }
}

// the function that actually creates the read me
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table pf contents

  * [Description](#Description)

  * [Installation](#Install)

  * [Usage](#Use)


  * [Questions](#Questions)

  * [Contributors](#Contributors)
  
  * [Testing](#Testing)
  ${renderLicenseLink(data.license)}
  
  ## Description
  ${data.description}
 
  ## Installation 
  ${data.install}
  
  ## Usage
  ${data.use}

 
  ## Questions
    
  Please reach out if you have any questions regarding this application. 

  * Name - ${data.name}
  * Email - ${data.email}
  * GitHub - [${data.github}](https://github.com/${data.github}/)
  
  If you notice a bug with this application, please create an issue in github.
  Please provide specific details on how to recreate the bug, and possible suggestions
  on how to fix the bug. Please be as detailed as possible so I can fix it.
  
  ## Contributors
  ${data.contributors}

  ## Testing
  ${data.tests}


  ${renderLicenseSection(data.license)}

`;
}

// allows for this js file to be used inside the index.js
module.exports = generateMarkdown;

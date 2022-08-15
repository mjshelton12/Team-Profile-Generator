// Packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer')

// Array of questions for all employees, managers, engineers, and interns

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the new employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the new employee's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the new employee's email?",
    },
    {
        type: "list",
        name: "position",
        message: "Do you want to add another team member?",
        choices: ["Yes", "No"],
    },
]

const employeePosition = [
    {
        type: "list",
        name: "position",
        message: "What is the new employee's position?",
        choices: ["Engineer", "Intern"],
    },
]

const managerQuestions = [
    {
        type: "input",
        name: "teamName",
        message: "What is the new team's name?",
    },
    {
        type: "input",
        name: "name",
        message: "What is the managers's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
    },
        {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
    },
    {
        type: "list",
        name: "position",
        message: "Do you want to add another team member?",
        choices: ["Yes", "No"],
    },
]

const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "What is the new employee's github username?",
    },
]

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What school does your employee attend?",
    },
]


// Function to prompt employee questions

function makeManager() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            const filename = `${data.teamName.toLowerCase().split(' ').join('')}.html`
            switch(true) {
                case data.position === "Yes":
                    choosePosition()
                default:
                writeToFile(filename, generateEmployees(data))                    
            }
        })
}

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }

makeManager()
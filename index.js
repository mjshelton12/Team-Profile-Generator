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
        name: "officeNumber",
        message: "What is the new employee's office number?",
    },
    {
        type: "input",
        name: "teamName",
        message: "What is the new team's name?",
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
        name: "github",
        message: "What is the new employee's github username?",
    },
]


// Function to prompt employee questions

function makeNewEmployee() {
    inquirer
        .prompt(employeeQuestions)
        .then((data) => {
            switch(data){
                case() :
            }

            const filename = `${data.teamName.toLowerCase().split(' ').join('')}.html`

            writeToFile(filename, generateEmployees(data))
        })
}

function writeToFile()

makeNewEmployee()
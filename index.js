// Packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer')
const Manager = require('./src/Manager')
const Intern = require('./src/Intern')
const Engineer = require('./src/Engineer');
let teams = [];


// Array of questions for all employees, managers, engineers, and interns

const teamNameQuestion = [
    {
        type: "input",
        name: "teamName",
        message: "What is the new team's name?",
    },
]

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
]

const employeePosition = [
    {
        type: "list",
        name: "position",
        message: "What is the new employee's position?",
        choices: ["Engineer", "Intern", "I don't want to make an new employee"],
    },
]

const managerQuestions = [
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
    {
        type: "list",
        name: "position",
        message: "Do you want to add another team member?",
        choices: ["Yes", "No"],
    },
]

const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "What school does your employee attend?",
    },
    {
        type: "list",
        name: "position",
        message: "Do you want to add another team member?",
        choices: ["Yes", "No"],
    },
]



// Function to prompt employee questions

function makeManager() {
    inquirer
        .prompt([...teamNameQuestion, ...employeeQuestions, ...managerQuestions])
        .then((data) => {
                const newEmployee = new Manager(data.name, data.id)
                teams.push(newEmployee)
                
                if(data.position === "Yes"){
                    choosePosition()
                } else {
                    writeToFile('teamPage.html', generateEmployees(teams))                    
                }
        })
}

function choosePosition() {
    inquirer
        .prompt(employeePosition)
        .then((data) => {
            switch(data.position) {
                case "Engineer":
                    makeEngineer();
                    break;
                case "Intern":
                    makeIntern();
                    break;
                default:
                    writeToFile('teamPage.html', generateEmployees(teams))
            }
        })
}

function makeEngineer() {
    inquirer
        .prompt([...employeeQuestions, ...engineerQuestions])
        .then((data) => {
                const newEmployee = new Engineer(data.name, data.id)
                teams.push(newEmployee)
                
                if(data.position === "Yes"){
                    choosePosition()
                } else {
                    writeToFile('teamPage.html', generateEmployees(teams))                    
                }
        })
}

function makeIntern() {
    inquirer
        .prompt([...employeeQuestions, ...internQuestions])
        .then((data) => {
                const newEmployee = new Intern(data.name, data.id)
                teams.push(newEmployee)
                
                if(data.position === "Yes"){
                    choosePosition()
                } else {
                    writeToFile('teamPage.html', generateEmployees(teams))                    
                }
        })
}

function generateEmployees(members) {
    return members
}


function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }

makeManager()


// function typeEmployee()
//    .prompt
//    .then
//      build empoyee object
//      push into team array


// funciton generateEmployees
//    team array and print to HTML
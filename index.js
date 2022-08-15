// Packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer')
const Manager = require('./src/Manager')
const Intern = require('./src/Intern')
const Manager = require('./src/Manager');
const Employee = require("./src/Employee");
let teams = [];


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
        .prompt([...employeeQuestions, ...managerQuestions])
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
        .prompt(
            {
                type: "list",
                name: "role",
                message: "What role does your new employee hold?",
                choices: ["Engineer", "Intern", "I don't want to make an new employee"]
            }
        )
        .then((data) => {
            switch(data.role) {
                case "Manager":
                    makeManager();
                    break;
                case "Engineer":
                    makeEngineer();
                    break;
                case "Intern":
                    makeIntern();
                    break;
                default:
                    writeToFile()
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
        .prompt([...employeeQuestions, ...engineerQuestions])
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
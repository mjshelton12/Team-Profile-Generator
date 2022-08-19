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
        name: "role",
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
        name: "add",
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
        name: "add",
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
        name: "add",
        message: "Do you want to add another team member?",
        choices: ["Yes", "No"],
    },
]



// Function to prompt employee questions

function makeManager() {
    inquirer
        .prompt([...employeeQuestions, ...managerQuestions])
        .then((data) => {
                const newEmployee = new Manager(data.name, data.id, data.email, data.officeNumber)
                teams.push(newEmployee)
                
                if(data.add === "Yes"){
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
            switch(data.role) {
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
                const newEmployee = new Engineer(data.name, data.id, data.email, data.github)
                teams.push(newEmployee)
                
                if(data.add === "Yes"){
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
                const newEmployee = new Intern(data.name, data.id, data.email, data.school)
                teams.push(newEmployee)
                
                if(data.add === "Yes"){
                    choosePosition()
                } else {
                    writeToFile('teamPage.html', generateEmployees(teams))                    
                }
        })
}

function generateEmployees(members) {
    console.log(members)
    let topOfPage = `<!DOCTYPE html>
    <html>
        <head>
            <title>Team Page</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <script src="https://kit.fontawesome.com/06e213b886.js" crossorigin="anonymous"></script>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
            />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="./dist/style.css" />
        </head>
        <body>
            <div class = "header-box">
                <div class = "container">
                    <div class = "row justify-content-center header-box">
                        <h1 class = "team-title"> Our Team </h1>
                    </div>
                </div>
            </div>
            <div id = "member-cards" class = "container">
            <div class = "row justify-center-content">
            `
    
    let card = members.map((member, i) => {
        return `<div class = "col-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${member.getRole()}</h6>
                <p class="card-text"><i class="fa-solid fa-circle-arrow-right"></i> ID: ${member.id}</p>
                <p class="card-text"><i class="fa-solid fa-circle-arrow-right"></i> email: <a href="mailto:${member.email}">${member.email}</a></p>
                <p class="card-text"><i class="fa-solid fa-circle-arrow-right"></i>${renderOfficeNumber(member)} ${renderGitHub(member)} ${renderSchool(member)}</p>
            </div>
        </div>
      </div>`
    })

    console.log(card)

    let bottomOfPage = `
    </div>
    </div>
    </div>
    </body>`

    return topOfPage + card.join('\n') + bottomOfPage
}

function renderOfficeNumber(member) {
    if (member.officeNumber) {
        return ` Office: ${member.officeNumber}`
    } else {
        return ''
    }
}

function renderGitHub(member) {
    if (member.github) {
        return ` Github: <a href = "http://www.github.com/${member.github}" target="_blank">${member.github}</a>`
    } else {
        return ''
    }
}

function renderSchool(member) {
    if (member.school) {
        return ` School: ${member.school}`
    } else {
        return ''
    }
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
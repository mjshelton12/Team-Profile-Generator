// Imports Employee class
const Employee = require('./Employee.js')

// Creates a Emgomeer class that extends the Employee class

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github
  }
  
  getGithub() {
    return `[Github: ${this.github}](http://www.github.com/${this.github})`
  }

  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer;
// Imports Employee class
const Employee = require('./Employee.js')

// Creates a Emgomeer class that extends the Employee class

class Engineer extends Employee {
  constructor(name, id, email){
    super(name, id, email)
    this.github = github
  }
  
  getGithub() {
    const githubProfile = `[Github: ${this.github}](http://www.github.com/${data.github})`
  }

  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer;
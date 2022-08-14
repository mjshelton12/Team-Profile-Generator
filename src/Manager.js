// Imports Employee class
const Employee = require('./Employee.js')

// Creates a Manager class that extends the Employee class

class Manager extends Employee {
  constructor(name, id, email){
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  
  getGithub() {
    const githubProfile = `[Github: ${this.github}](http://www.github.com/${data.github})`
  }

  getRole() {
    return 'Engineer'
  }
}

module.exports = Manager;
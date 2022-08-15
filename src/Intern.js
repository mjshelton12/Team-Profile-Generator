// Imports Employee class
const Employee = require('./Employee.js')

// Creates a Intern class that extends the Employee class

class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email)
    this.school = school
  }
  
  getSchool() {
    return `School: ${this.school}`
  }

  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;
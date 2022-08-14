// Imports Employee class
const Employee = require('./Employee.js')

// Creates a Intern class that extends the Employee class

class Intern extends Employee {
  constructor(name, id, email){
    super(name, id, email)
    this.school = school
  }
  
  getSchool() {
    return '[school: ${this.github}](http://www.github.com/${data.github})'
  }

  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;
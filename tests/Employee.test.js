const Employee = require('../src/Employee.js')

describe('Employee', () => {
  describe('properties', () => {
    it('has a name', () => {
      const name = 'Natasha Romanoff'
      const id = 567
      const email = 'nromanoff@example.com'
  
      const employee = new Employee(name, id, email)
      expect(employee.name).toBe(name)
    })
  
    it('has an type', () => {
      const name = 'Natasha Romanoff'
      const id = 567
      const email = 'nromanoff@example.com'
    
      const employee = new Employee(name, id, email)
      expect(employee.id).toBe(id)
    })
  
    it('has an email', () => {
      const name = 'Natasha Romanoff'
      const id = 567
      const email = 'nromanoff@example.com'
      
      const employee = new Employee(name, id, email)
      expect(employee.email).toBe(email)
    })
  })
  describe('#getRole', () => {
    it("returns employee's role", () => {
      const name = 'Natasha Romanoff'
      const id = 567
      const email = 'nromanoff@example.com'
      
      const employee = new Employee(name, id, email)
      expect(employee.getRole()).toBe('Employee')
    })

  })
})
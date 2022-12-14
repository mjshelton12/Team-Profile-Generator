const Employee = require('../src/Employee.js')

describe('Employee', () => {
  const name = 'Natasha Romanoff'
  const id = 567
  const email = 'nromanoff@example.com'
  const employee = new Employee(name, id, email)
  
  describe('properties', () => {
    it('has a name', () => {
      expect(employee.name).toBe(name)
    })
  
    it('has an type', () => {
      expect(employee.id).toBe(id)
    })
  
    it('has an email', () => {
      expect(employee.email).toBe(email)
    })
  })
  describe('#getRole', () => {
    it("returns employee's role", () => {
      expect(employee.getRole()).toBe('Employee')
    })

  })
})
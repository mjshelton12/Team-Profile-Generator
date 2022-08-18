const Manager = require('../src/Manager.js')

describe('Manager', () => {
  const name = 'Nick Fury'
  const id = 123
  const email = 'nfury@example.com'
  const officeNumber = "He calls you"
  const manager = new Manager(name, id, email, officeNumber)

  describe('properties', () => {
    it('has a name', () => {
      expect(manager.name).toBe(name)
    })
  
    it('has an id', () => {
      expect(manager.id).toBe(id)
    })
  
    it('has an email', () => {
      expect(manager.email).toBe(email)
    })

    it('has an email', () => {
      expect(manager.officeNumber).toBe(officeNumber)
    })
  })
  describe('#getRole', () => {
    it("returns manager's role", () => {
      expect(manager.getRole()).toBe(`Manager`)
    })

  })
})
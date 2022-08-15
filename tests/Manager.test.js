const Manager = require('../src/Manager.js')

describe('Manager', () => {
  describe('properties', () => {
    it('has a name', () => {
      const name = 'Nick Fury'
      const id = 123
      const email = 'nfury@example.com'
      const officeNumber = "He calls you"
  
      const manager = new Manager(name, id, email, officeNumber)
      expect(manager.name).toBe(name)
    })
  
    it('has an id', () => {
      const name = 'Nick Fury'
      const id = 123
      const email = 'nfury@example.com'
      const officeNumber = "He calls you"
    
      const manager = new Manager(name, id, email, officeNumber)
      expect(manager.id).toBe(id)
    })
  
    it('has an email', () => {
      const name = 'Nick Fury'
      const id = 123
      const email = 'nfury@example.com'
      const officeNumber = "He calls you"
    
      const manager = new Manager(name, id, email, officeNumber)
      expect(manager.email).toBe(email)
    })
    it('has an email', () => {
      const name = 'Nick Fury'
      const id = 123
      const email = 'nfury@example.com'
      const officeNumber = "He calls you"
      
      const manager = new Manager(name, id, email, officeNumber)
      expect(manager.officeNumber).toBe(officeNumber)
    })
  })
  describe('#getRole', () => {
    it("returns manager's role", () => {
      const name = 'Nick Fury'
      const id = 123
      const email = 'nfury@example.com'
      const officeNumber = "He calls you"
    
      const manager = new Manager(name, id, email, officeNumber)
      expect(manager.getRole()).toBe(`Manager`)
    })

  })
})
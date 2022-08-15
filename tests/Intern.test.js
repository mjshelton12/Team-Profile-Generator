const index = require('./index')

describe('Intern', () => {
  describe('properties', () => {
    it('has a name', () => {
      const name = 'Tony Stark'
      const id = 345
      const email = 'tstark@example.com'
      const school = 'NorthWestern'
  
      const intern = new Intern(name, id, email, school)
      expect(intern.name).toBe(name)
    })
  
    it('has an id', () => {
      const name = 'Tony Stark'
      const id = 345
      const email = 'tstark@example.com'
      const school = 'NorthWestern'
    
      const intern = new Intern(name, id, email, school)
      expect(intern.id).toBe(id)
    })
  
    it('has an email', () => {
      const name = 'Tony Stark'
      const id = 456
      const email = 'tstark@example.com'
      const school = 'NorthWestern'
    
      const intern = new Intern(name, id, email, school)
      expect(intern.email).toBe(email)
    })
  })
  describe('#gitGithub', () => {
    it("returns intern's school link", () => {
      const name = 'Tony Stark'
      const id = 345
      const email = 'tstark@example.com'
      const school = 'NorthWestern'
    
      const intern = new Intern(name, id, email, school)
      expect(intern.getSchool()).toBe(`School: ${school}`)
    })

  })
})
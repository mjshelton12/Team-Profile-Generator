
const Intern = require('../src/Intern.js')

describe('Intern', () => {
    const name = 'Tony Stark'
    const id = 345
    const email = 'tstark@example.com'
    const school = 'Avengers Academy'
    const intern = new Intern(name, id, email, school)

  describe('properties', () => {

    it('has a name', () => {
      expect(intern.name).toBe(name)
    })
  
    it('has an id', () => {
      expect(intern.id).toBe(id)
    })
  
    it('has an email', () => {
      expect(intern.email).toBe(email)
    })
    it('has an email', () => {
      expect(intern.school).toBe(school)
    })
  })
  describe('#gitGithub', () => {
    it("returns intern's school link", () => {    
      expect(intern.getSchool()).toBe(`School: ${school}`)
    })

  })
})
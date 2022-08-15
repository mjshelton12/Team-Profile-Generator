const Engineer = require('../src/Engineer.js')

describe('Engineer', () => {
    const name = 'Jessica Jones'
    const id = 234
    const email = 'jjones@example.com'
    const github = 'JJones48'
    const engineer = new Engineer(name, id, email, github)

  describe('properties', () => {
    it('has a name', () => {
      expect(engineer.name).toBe(name)
    })
  
    it('has an id', () => {
      expect(engineer.id).toBe(id)
    })
  
    it('has an email', () => {
      expect(engineer.email).toBe(email)
    })
  })
  describe('#getGithub', () => {
    it("returns engineer's github link", () => {
      expect(engineer.getGithub()).toBe(`[Github: JJones48](http://www.github.com/JJones48)`)
    })

  })
})
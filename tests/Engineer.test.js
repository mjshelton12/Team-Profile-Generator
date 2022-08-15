const index = require('./index')

describe('Engineer', () => {
  describe('properties', () => {
    it('has a name', () => {
      const name = 'Jessica Jones'
      const id = 234
      const email = 'jjones@example.com'
      const github = 'JJones48'
  
      const engineer = new Engineer(name, id, email, github)
      expect(engineer.name).toBe(name)
    })
  
    it('has an id', () => {
      const name = 'Jessica Jones'
      const id = 234
      const email = 'jjones@example.com'
      const github = 'JJones48'
    
      const engineer = new Engineer(name, id, email, github)
      expect(engineer.id).toBe(id)
    })
  
    it('has an email', () => {
      const name = 'Jessica Jones'
      const id = 345
      const email = 'jjones@example.com'
      const github = 'JJones48'
      
      const engineer = new Engineer(name, id, email, github)
      expect(engineer.email).toBe(email)
    })
  })
  describe('#getGithub', () => {
    it("returns engineer's github link", () => {
      const name = 'Jessica Jones'
      const id = 234
      const email = 'jjones@example.com'
      const github = 'JJones48'
      
      const engineer = new Engineer(name, id, email, github)
      expect(engineer.getGithub()).toBe(`[Github: JJones48](http://www.github.com/JJone48)`)
    })

  })
})
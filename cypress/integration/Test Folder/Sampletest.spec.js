///<reference types="cypress"/>
describe('CustomSuite',function()
{
    it('LoginTest-FirstCase', function()
    {
    // cy.visit('https://opensource-demo.orangehrmlive.com/')
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // cy.get('[placeholder="Username"]').type('Admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('[name="username"]').type('Admin')
    // cy.get('')
    // cy.get('.oxd-button').click()
   cy.visit('https://www.automationtesting.co.uk/index.html')
   cy.contains('Contact Us Form Test').click({force:true})
   
   cy.get('[disabled]')     
    
    })

})

///<reference types="cypress"/>
describe('CustomSuite',function()
{
    it('Testing arena', function()
    {
         cy.visit('https://www.automationtesting.co.uk/index.html')
        //  cy.contains('Contact Us Form Test').click({force:true})
        //  cy.get('[name ="first_name"]').type('Amandeep')
        //  cy.get('[placeholder="Last Name"]').type('Sagoo')
        //  cy.get('[placeholder="Email Address"]').type('abc123@gmail.com')
        //  cy.get('[name="message"]').type('no comment')
        //  cy.contains('SUBMIT').click()

        //    cy.contains('DropDown Checkbox Radio').click({force:true})
        //   cy.get('[for="demo-priority-normal"]').click()
        //  cy.get('[for="cb_green"]').click()
        //  cy.get('#cb_blue').check({force:true})
        //  cy.get("#cb_red").uncheck({force:true})

        // cy.get('#cars').select('BMW')
        // cy.get('#cars').select('Ford')

        // cy.xpath('//li[@onclick="menuClick2()"]').click({force:true})
        // cy.xpath('//a[@style="border-bottom: none;"]').should('h3')
        cy.xpath('//div[@class="content"]').should('have.length',8)
        cy.xpath('//div[@class="content"]').click({multiple:true})







    })
})
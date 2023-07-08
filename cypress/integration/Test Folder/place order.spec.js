///<reference types="cypress"/>
describe('CustomSuite',function()
{
    it('Login or register', function()
    {
        // cy.visit("https://automationteststore.com/")
        // cy.get('#customer_menu_top > li > a').click()
        // cy.get('#accountFrm_accountregister').click()
        // cy.contains('Continue').click()
        // cy.get('#AccountFrm_firstname').type("aman")
        // cy.get('#AccountFrm_lastname').type("kaur")
        // cy.get('#AccountFrm_email').type("abc000@gmail.com")
        // cy.get('#AccountFrm_address_1').type("address Abc")
        // cy.get('#AccountFrm_city').type("montreal")
        // cy.get('#AccountFrm_zone_id').select('Kent')
        // cy.get('#AccountFrm_postcode').type("H31N1N1")
        // cy.get('#AccountFrm_country_id').select("United Kingdom")

        // cy.get('#AccountFrm_loginname').type("montreal")
        // cy.get('#AccountFrm_password').type("admin123")
        // cy.get('#AccountFrm_confirm').type("admin123")
        // cy.get('#AccountFrm_newsletter0').check()
        // cy.get('#AccountFrm_agree').check()
        // cy.get('.col-md-2 > .btn').click()

    })
    it('Login ', function()
    {
        cy.visit("https://automationteststore.com/")
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#loginFrm_loginname').type("montreal")
        cy.get('#loginFrm_password').type("admin123")
        cy.get('#loginFrm > fieldset > .btn').click()

})
})
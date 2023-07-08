it('Login ', function()
    {
         cy.visit("https://automationteststore.com/")
       
          cy.get('#customer_menu_top > li > a').click()
        // cy.get('#loginFrm_loginname').type("montreal")
        // cy.get('#loginFrm_password').type("admin123")
        // cy.get('#loginFrm > fieldset > .btn').click()
        cy.get('#loginFrm > fieldset > .btn').should('contain','Login')
        
        // cy.get('active menu_home').should('contain','Home')
       
    })
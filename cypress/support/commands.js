Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Andrey')
    cy.get('#lastName').type('Felippe')
    cy.get('#email').type('andrey@exemplo.com')
    cy.get('#open-text-area').type('Teste Andrey')
    cy.contains('button', 'Enviar').click()
})


/// <reference types="Cypress" />
import DirectoryPage from '../Pages/MCDirectory/DirectoryPage'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible');
});

Cypress.Commands.add('isInvisible', selector => {
    cy.get(selector).should('not.be.visible');
});

Cypress.Commands.add('isExist', selector => {
    cy.get(selector).should('exist');
});

Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist');
});

Cypress.Commands.add('setValue', (selector, value) => {
    cy.get(selector).type(value);
});

Cypress.Commands.add('clickButton', (selector) => {
    cy.get(selector).click();
});

Cypress.Commands.add('setResolution', size => {
    if (Cypress._.isArray(size)){
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});



/*
* Application Reusables
*/


Cypress.Commands.add("searchPartners", (partnerName) => { 
    const directoryPage = new DirectoryPage()
    directoryPage.getSearchPartnerTextField().type(partnerName)

})

Cypress.Commands.add("verifyPartners", (partnerName) => { 
    const directoryPage = new DirectoryPage()
    
    cy.on('fail', (e) => {
        console.error(e)

      })
    
    directoryPage.getListedPartners().should('have.text',partnerName)
})


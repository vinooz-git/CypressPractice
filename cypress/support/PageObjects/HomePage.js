class HomePage
{

    getProductDirectoryButton() { return cy.get('.dxp-btn.dxp-btn-primary.dxp-theme-white') }

    getCookiesAcceptBttn() { return cy.get('#onetrust-accept-btn-handler') }

    getMasterCardTabMenu() { return cy.get('span[aria-label="Mastercard for you"]') }

    getSupportMenu() { return cy.get('.dxp-title-first[title="Support"]') }

}
export default HomePage;
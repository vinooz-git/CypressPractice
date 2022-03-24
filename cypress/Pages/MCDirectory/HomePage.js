import BasePage from "../BasePage";

class HomePage extends BasePage
{

    ProductDirectoryButton() { return cy.get('.dxp-btn.dxp-btn-primary.dxp-theme-white') }
    CookiesAcceptBttn() { return cy.get('#onetrust-accept-btn-handler'); }
    MasterCardTabMenu() { return cy.get('span[aria-label="Mastercard for you"]') }
    SupportMenu() { return cy.get('.dxp-title-first[title="Support"]') }

    clickCookiesAccBttn()
    {
        this.CookiesAcceptBttn().click()
        cy.log("Cookies Accept Button Clicked")
    }

    clickMasterCardTabMenu()
    {
        cy.wait(1000)
        this.MasterCardTabMenu().click()
        cy.log("Master Tab Menu Clicked")
    }

    clickCurrencyConverterMenu()
    {
        cy.wait(1000)
        this.SupportMenu().invoke('show')
        cy.contains('Currency converter').click({force: true})
        cy.log("Currency Converter Menu Clicked")
    }

    clickProductDirectoryButton()
    {
        this.ProductDirectoryButton().click()
    }

}

module.exports = new HomePage();
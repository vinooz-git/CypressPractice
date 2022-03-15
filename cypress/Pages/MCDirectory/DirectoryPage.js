import BasePage from "../BasePage";

class DirectoryPage extends BasePage
{

    getSearchPartnerTextField()
    {
        return cy.get('.dxp-form-control',{ timeout: 10000 })
    }

    getListedPartners()
    {
        return cy.get('.undefined > :nth-child(1)',{ timeout: 4000 })
    }

}
module.exports = new DirectoryPage();
/// <reference types="Cypress" />

const homePage = require('../../Pages/MCDirectory/HomePage'),
directoryPage = require('../../Pages/MCDirectory/DirectoryPage'),
supportPage= require('../../Pages/MCDirectory/SupportPage');

describe('Demo MC Test Suite', function() 
{
  //const homePage = new HomePage()
  //const directoryPage = new DirectoryPage()
  //const supportPage = new SupportPage()
  const testData = null

    beforeEach(function() {                   // runs each time before each it block
         
      cy.fixture('example').then(function(data)
        {
        this.data=data
        cy.visit(Cypress.env('url'))          // Used Environmental values from Cypress.json File
        }) 
        
      })
     
    before(function(){ })                     // runs only once before all tests in the block

   
   it.skip('Read the array data from Nested Json File', function() {
   testData = this.data

    cy.get(testData.SampleArray).each((testDataObj) => 
         {
          cy.log(" array val each "+testDataObj) 
         }
    )})

   it.only('Verify Currency Converter in MasterCard',function() {
    
    homePage.getCookiesAcceptBttn().click()
    cy.wait(1000)
    homePage.getMasterCardTabMenu().click()
    cy.wait(1000)
    homePage.getSupportMenu().invoke('show')
    cy.contains('Currency converter').click({force: true})

    supportPage.getTransactionCurrencyDDButtn().click()
    supportPage.getTransactionSearchBttn().type(this.data.CurrencyInputs.from.TransCurrency,{force: true})
    cy.wait(1000)
    cy.contains(this.data.CurrencyInputs.from.TransCurrency).click()

    supportPage.getTransAmountText().type(this.data.CurrencyInputs.from.Amount)

    supportPage.getCardCurrencyDDButtn().click()
    supportPage.getCardCurrSearchBttn().type(this.data.CurrencyInputs.to.CardCurrency)
    cy.wait(1000)
    cy.contains(this.data.CurrencyInputs.to.CardCurrency).click()

    supportPage.getBankFeeText().type(this.data.CurrencyInputs.to.BankFee)
    supportPage.getDateIcon().dblclick()

    //Validation part with cypress 

    supportPage.getExchangeInfo().should('contain.text', '50,000.00 INR')
    

  } )


   it('Verify Partners in Digital Payments',function() {
    
    homePage.getCookiesAcceptBttn().click()
    homePage.getProductDirectoryButton().click()
    cy.contains('DIGITAL PAYMENTS').click()
    cy.wait(5000)
    directoryPage.getSearchPartnerTextField().type(this.data.DigitalPartner)
    directoryPage.getListedPartners().should('have.text',this.data.DigitalPartner)
    
   }  )

      
  it('Verify Partners in Fintech Express ',function() {
    
    homePage.getCookiesAcceptBttn().click()
    homePage.getProductDirectoryButton().click()
    cy.contains('FINTECH EXPRESS').click()
    cy.wait(5000)
    directoryPage.getSearchPartnerTextField().type(this.data.FintechPartner)
    directoryPage.getListedPartners().should('have.text',this.data.FintechPartner)

   }  )


   it('Verify Partners in Commercial ',function() {

    homePage.getCookiesAcceptBttn().click()
    homePage.getProductDirectoryButton().click()
    cy.contains('COMMERCIAL').click()
    cy.wait(5000)
    cy.searchPartners(this.data.FintechPartner)
    cy.verifyPartners(this.data.FintechPartner)

   }  )

  

}  )
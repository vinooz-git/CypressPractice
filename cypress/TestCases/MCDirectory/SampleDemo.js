/// <reference types="Cypress" />

const homePage = require('../../Pages/MCDirectory/HomePage'),
directoryPage = require('../../Pages/MCDirectory/DirectoryPage'),
supportPage= require('../../Pages/MCDirectory/SupportPage'),
testData = null;

describe('Demo MC Test Suite', function() 
{
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
    
    homePage.clickCookiesAccBttn()
    homePage.clickMasterCardTabMenu()
    homePage.clickCurrencyConverterMenu()
    
    supportPage.clickTransCurrencyDDBttn()
    supportPage.clickTransactionSearchBttn(this.data.CurrencyInputs.from.TransCurrency)
    supportPage.EnterTransactionAmt(this.data.CurrencyInputs.from.Amount)
    supportPage.clickCardCurrencyDDButtn()
    supportPage.EnterCardCurrency(this.data.CurrencyInputs.to.CardCurrency)
    supportPage.EnterBankFee(this.data.CurrencyInputs.to.BankFee)
    supportPage.doublClickDateIcon()

    //Validation part with cypress 
    supportPage.getExchangeInfo().should('contain.text', '50,000.00 INR')
    
  } )


   it('Verify Partners in Digital Payments',function() {
    
    homePage.clickCookiesAccBttn()
    homePage.clickProductDirectoryButton()
    cy.contains('DIGITAL PAYMENTS').click()
    cy.wait(5000)
    directoryPage.getSearchPartnerTextField().type(this.data.DigitalPartner)
    directoryPage.getListedPartners().should('have.text',this.data.DigitalPartner)
    
   }  )

      
  it('Verify Partners in Fintech Express ',function() {
    
    homePage.clickCookiesAccBttn()
    homePage.clickProductDirectoryButton()
    cy.contains('FINTECH EXPRESS').click()
    cy.wait(5000)
    directoryPage.getSearchPartnerTextField().type(this.data.FintechPartner)
    directoryPage.getListedPartners().should('have.text',this.data.FintechPartner)

   }  )


   it('Verify Partners in Commercial ',function() {

    homePage.clickCookiesAccBttn()
    homePage.clickProductDirectoryButton()
    cy.contains('COMMERCIAL').click()
    cy.wait(5000)
    cy.searchPartners(this.data.FintechPartner)
    cy.verifyPartners(this.data.FintechPartner)

   }  )



}  )
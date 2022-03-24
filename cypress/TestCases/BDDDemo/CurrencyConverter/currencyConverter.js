/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
const homePage = require('../../../Pages/MCDirectory/HomePage'),
directoryPage = require('../../../Pages/MCDirectory/DirectoryPage'),
supportPage= require('../../../Pages/MCDirectory/SupportPage');

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";


Given('I open MC Currency converter Page',()=>
{
    cy.visit(Cypress.env('url'))
    homePage.clickCookiesAccBttn()
    homePage.clickMasterCardTabMenu()
    homePage.clickCurrencyConverterMenu()
})

And('I provided the Transaction Currency as {string}',(TransCurrency)=>
{
    supportPage.clickTransCurrencyDDBttn()
    supportPage.clickTransactionSearchBttn(TransCurrency)
})

And('I entered the Transaction amount as {string}',(TransAmt)=>
{
    supportPage.EnterTransactionAmt(TransAmt)
})

Then('I provided the Card Currency as {string}',(CardCurrency)=>
{
    supportPage.clickCardCurrencyDDButtn()
    supportPage.EnterCardCurrency(CardCurrency)
})

And('I entered Bank Fees as {string}',(FeeAmt)=>
{
    supportPage.EnterBankFee(FeeAmt)
})

Then('I should see the Exchange rate info for current Day',()=>
{
    supportPage.doublClickDateIcon()
    //Validation part with cypress 
    supportPage.getExchangeInfo().should('contain.text', '50,000.00 INR')
})

And('Try Xpath',()=>
{
    cy.xpath('//*[@title="Transaction Currency"]').click()
    cy.xpath('//*[@id="tCurrency"]').type("INDIAN",{force: true})
    cy.wait(4000)
    cy.xpath('//*[@id="mczRowC"]/div[1]/ul/li[2]').click()

})

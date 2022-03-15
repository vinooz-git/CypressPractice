import BasePage from "../BasePage";

class SupportPage extends BasePage
{

    getTransactionCurrencyDDButtn() { return cy.get('#tCurrency') }

    getTransactionSearchBttn() {return cy.get('#transactionCurr',{timeout: 5000})}

    getTransAmountText() {return cy.get('#txtTAmt')}

    getCardCurrencyDDButtn() { return cy.get('#cardCurrency') }

    getCardCurrSearchBttn() {return cy.get('#cardCurr',{timeout: 5000})}

    getBankFeeText() { return cy.get('#BankFee')}

    getDateIcon(){ return cy.get('#getDate')}

    getExchangeInfo() { return cy.get('#exchangeRateDiv',{timeout: 5000})}




}

module.exports = new SupportPage();
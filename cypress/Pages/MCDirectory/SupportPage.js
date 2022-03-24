import BasePage from "../BasePage";

class SupportPage extends BasePage
{

    TransactionCurrencyDDButtn() { return cy.get('#tCurrency') }
    TransactionSearchBttn() {return cy.get('#transactionCurr',{timeout: 5000})}
    TransAmountText() {return cy.get('#txtTAmt')}
    CardCurrencyDDButtn() { return cy.get('#cardCurrency') }
    CardCurrSearchBttn() {return cy.get('#cardCurr',{timeout: 5000})}
    BankFeeText() { return cy.get('#BankFee')}
    DateIcon(){ return cy.get('#getDate')}
    getExchangeInfo() { return cy.get('#exchangeRateDiv',{timeout: 5000})}


    clickTransCurrencyDDBttn()
    {
        this.TransactionCurrencyDDButtn().click()
    }

    clickTransactionSearchBttn(BtnName)
    {
        this.TransactionSearchBttn().type(BtnName,{force: true})
        cy.wait(1000)
        cy.contains(BtnName).click()
    }

    EnterTransactionAmt(Amount)
    {
        this.TransAmountText().type(Amount)
    }

    clickCardCurrencyDDButtn()
    {
        this.CardCurrencyDDButtn().click()
    }

    EnterCardCurrency(CurrencyName)
    {
        this.CardCurrSearchBttn().type(CurrencyName)
        cy.wait(1000)
        cy.contains(CurrencyName).click()
    }

    EnterBankFee(FeeAmount)
    {
        this.BankFeeText().type(FeeAmount)
    }

    doublClickDateIcon()
    {
        this.DateIcon().dblclick()
        cy.screenshot()
    }

}

module.exports = new SupportPage();
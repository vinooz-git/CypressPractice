Feature: End to End Currency Converter exchange information validation

    @MCCurrencyVal
    Scenario: Verify the exchange rate for current day
    Given I open MC Currency converter Page
    And I provided the Transaction Currency as "INDIAN RUPEE"
    And I entered the Transaction amount as "50000"
    Then I provided the Card Currency as "UNITED STATES DOLLAR"
    And I entered Bank Fees as "3"
    Then I should see the Exchange rate info for current Day

    @Test
    Scenario: Test
    Given I open MC Currency converter Page
    And Try Xpath 

@contacto @regression
Feature: Webdriver University - Contact Us Page

    Feature Description

    Background: Pre conditions
        #Given I navigate to the webdriveruniversity homepage
        #When I click on the contact us button
        Given I navigate to the contact page

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then U should be presented with a successful contact submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then U should be presented with a unsuccessful contact submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Jhonn"
        And I type a specific last name "Doe"
        And I type a specific email address "JhonDoe@mail.com"
        And I type a specific word "Que se yo" and number 6788 within the comment inpur field
        And I click on the submit button
        Then U should be presented with a successful contact submission message

    @smoke
    Scenario Outline: Scenario Outline name: Validate contact us page
        And I type a first name  <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName  | emailAddress  | comment          | message                      |
            | Andrea    | Hernandez | hola@test.com | Hola lo logre    | Thank You for your Message!  |
            | Darwin    | Soto      | hola@homa.com | Sera que pasa    | Thank You for your Message!  |
            | Grace     | Alexander | jdsjfdsfhola  | este es invalido | Error: Invalid email address |
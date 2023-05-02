/// <reference types="cypress" />

import { When , Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import ContactUs_PO from "../page-object-base/ContactUs_PO";
const contactUs_Page = new ContactUs_PO

Given('I navigate to the contact page', ()=>{
    contactUs_Page.navigateTo_ContactUs_Page()
})

When(`I type a first name`, ()=>{
    //cy.get("input[name='first_name']").type("Jesus")
    contactUs_Page.type_FirstName("Jesus")
})

When(`I type a last name`, ()=>{
    //cy.get("input[name='last_name']").type("Jesus")
    contactUs_Page.type_LastName("Bautista")
}) 

When(`I enter an email address`, ()=>{
    //cy.get("input[name='email']").type("Jesus@test.com")
    contactUs_Page.type_EmailAddress("Jesus@test.com")
}) 

When(`I type a comment`, ()=>{
    //cy.get("textarea[name='message']").type("Hola Mundo como estan")
    contactUs_Page.type_comment("Hola Mundo como estan")
}) 

When(`I click on the submit button`, ()=>{
    //cy.get("input[type='submit']").click({force:true})
    contactUs_Page.ClickOn_Submit_Button()
}) 

Then(`U should be presented with a successful contact submission message`, ()=>{
    //cy.get("h1").should("have.text","Thank You for your Message!")
    contactUs_Page.validate_Submission_Header_Text("Thank You for your Message!")
}) 

Then('U should be presented with a unsuccessful contact submission message', ()=>{
    //cy.get('body').contains('Error: Invalid email address')
    contactUs_Page.validate_Submission_Header_Text("Error: Invalid email address")

})

When('I type a specific first name {string}',(firstName)=>{
    //cy.get("input[name='first_name']").type(firstName)
    contactUs_Page.type_FirstName("Jesus")
})

When('I type a specific last name {string}',(lastName)=>{
    //cy.get("input[name='last_name']").type(lastName)
    contactUs_Page.type_LastName("Bautista")
})

When('I type a specific email address {string}',(email)=>{
    //cy.get("input[name='email']").type(email)
    contactUs_Page.type_EmailAddress("Jesus@test.com")
})

When('I type a specific word {string} and number {int} within the comment inpur field',(word, number)=>{
    //cy.get("textarea[name='message']").type(word + " " + number)
    contactUs_Page.type_comment(word + " " + number)
})

/**{word} se usa porque en el ejemplo sabemos que estamos colocando un nombre sin espacios, es decir solo una
 * palabra que en este caso es el nombre, y en el feature se colocan entre los signos <> sin comillas, si se
 * usan comillas el valor debe ser string
 */
When("I type a first name  {word} and a last name {string}",(firstName, lastName)=>{
    //cy.get("input[name='first_name']").type(firstName);
    //cy.get("input[name='last_name']").type(lastName);
    contactUs_Page.type_FirstName(firstName)
contactUs_Page.type_LastName(lastName)

})

When('I type a {string} and a comment {string}', (emailAddress, comment)=>{
    //cy.get("input[name='email']").type(emailAddress);
    //cy.get("textarea[name='message']").type(comment);
    contactUs_Page.type_EmailAddress(emailAddress)
contactUs_Page.type_comment(comment)
    
})

/**Importante estar pendiente que al momento de crear los examples si son con casos multiples es
 * examples con s ya que si se coloca sin la s no va a tomar los multiples casos que podamos colocar
 */
Then('I should be presented with header text {string}', (message)=>{
    //cy.xpath("//h1 | //body").contains(message);
    contactUs_Page.validate_Submission_Header_Text(message)
    
})
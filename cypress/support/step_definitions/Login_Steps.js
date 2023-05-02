/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page-object-base/Login_PO";
const loginPage = new Login_PO

let stub;

Given('I navigate to the web login page',()=>{
    loginPage.navigateTo_Login_Page();
})

When('I type a username {}',(username)=>{
    //cy.get('#text').type(username)
    loginPage.type_Username(username)
}) 

When('I type a password {}',(password)=>{
    //cy.get('#password').type(password)
    loginPage.type_Password(password)
}) 

When('I click on the login button',()=>{
    stub = cy.stub();/**investigar */
    cy.on('window:alert', stub )
    loginPage.clickOn_Login_Button()
}) 

Then('I should be presented tieh an alert box which contains text {string}',(expectedAlert)=>{
    expect(stub).to.have.been.calledWith(expectedAlert)
    
}) 
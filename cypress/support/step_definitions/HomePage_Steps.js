/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page-object-base/Base_PO";
import HomePage_PO from "../page-object-base/HomePage_PO";

//const url = "https://webdriveruniversity.com/"

//const basePage = new Base_PO(); 
const homePage = new HomePage_PO();

Given(`I navigate to the webdriveruniversity homepage`, ()=>{
    //cy.visit(url);
    homePage.navigate("")
    //basePage.navigate("");
    //basePage.getPageTitle();
})//Given

When(`I click on the contact us button`, ()=>{
    //cy.get("#contact-us").invoke("removeAttr","target").click();
    //cy.Nombre("#contact-us")
    homePage.clickOn_ContactUs_Button();
})//When

When('I click on the login portal button', ()=>{
    //cy.get("#login-portal").invoke("removeAttr","target").click();
    //cy.Nombre("#login-portal")
    homePage.clickOn_Login_Button();
})
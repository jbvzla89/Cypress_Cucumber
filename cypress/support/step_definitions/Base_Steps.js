/// <reference types="cypress" />

import { When , Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(()=>{
    cy.log("HOla estas por alli")
})

When("I wait for {int} seconds", (seconds)=>{
    cy.wait(seconds * 1000)
})

After(()=>{
    cy.log("Si sigues alli estamos listos")
})
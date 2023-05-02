/// <reference types="cypress" />

class Base_PO {
    //baseUrl="https://webdriveruniversity.com/";
    navigate(path){
        //cy.visit(baseUrl + path)
        cy.fixture("config.json").then((data)=>{
            cy.visit(data.baseUrl + path)
        })
    }//navigate

    getPageTitle(){
        return cy.title();
    }//getPageTitle








}//cierre

export default Base_PO
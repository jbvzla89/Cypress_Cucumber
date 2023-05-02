
/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class HomePage_PO extends Base_PO {

    navigateToHomePage(){
        super.navigate("")
    }

    clickOn_ContactUs_Button() {
        cy.ClickAndOpenLink("#contact-us")
    }

    clickOn_Login_Button() {
        cy.ClickAndOpenLink("#login-portal")
    }


}//cierre

export default HomePage_PO

